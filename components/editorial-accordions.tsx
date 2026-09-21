export function EditorialConcepts({ items }: { items: readonly string[] }) {
  return <ul className="brand-contributions editorial-concepts">{items.map((item) => <li key={item}><span>{item}</span></li>)}</ul>;
}
