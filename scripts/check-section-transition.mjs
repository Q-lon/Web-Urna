import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import ts from 'typescript';

// Exercise the real controller under reduced-motion: explicit slide navigation
// must still travel through intermediate positions and ignore wheel momentum.
let now = 1000, y = 0, nextFrame = 0;
const frames = new Map(), listeners = new Map();
class Element {}
const sections = [0, 1080, 2160].map(top => ({ getBoundingClientRect: () => ({ top: top - y }) }));
const window = {
  get scrollY() { return y; },
  scrollTo: ({ top }) => { y = top; },
  addEventListener: (name, fn) => listeners.set(name, fn),
  removeEventListener() {},
};
const context = {
  exports: {}, require: () => ({ useEffect: fn => fn() }), window,
  document: { querySelectorAll: () => sections, querySelector: () => null, documentElement: { scrollHeight: 3240 }, addEventListener() {}, removeEventListener() {} },
  innerHeight: 1080, matchMedia: () => ({ matches: true }), HTMLElement: Element, Element,
  performance: { now: () => now }, setTimeout: () => 1, clearTimeout() {},
  requestAnimationFrame: fn => { frames.set(++nextFrame, fn); return nextFrame; },
  cancelAnimationFrame: id => frames.delete(id),
};
vm.runInNewContext(ts.transpileModule(readFileSync('components/section-alignment.tsx','utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, context);
context.exports.SectionAlignment();
function tick(ms) { now += ms; const pending = [...frames.values()]; frames.clear(); pending.forEach(fn => fn(now)); }
function wheel(deltaY) { listeners.get('wheel')({ deltaY, deltaX: 0, deltaMode: 0, target: null, preventDefault() {} }); }
wheel(120); tick(0); tick(425);
assert(y > 0 && y < 1080, 'Missing animated intermediate position');
wheel(900); tick(425);
assert.equal(y, 1080, 'Momentum skipped more than one section');
wheel(-120); tick(0); tick(425);
assert(y > 0 && y < 1080, 'Upward navigation is not animated');
tick(425); assert.equal(y, 0);
console.log('PASS: 850 ms travel, both directions, one section per gesture, including reduced-motion.');
