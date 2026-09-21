# Volver a la versión anterior al motion polish

La instrucción del usuario «retroceder» se refiere a la copia de código y assets guardada antes de esta pasada:

`C:/Users/Feli/Documents/ChatGPT/ShantiBond-before-motion-20260916`

La copia incluye el código, assets, configuración, archivos sin seguimiento y lockfile actuales; excluye únicamente dependencias instaladas, Git, outputs y cachés regenerables. No es un reset al commit inicial.

Para revertir esta pasada: comparar con la copia, restaurar solo los archivos cambiados por motion (components/page-motion.tsx y app/layout.tsx) y retirar app/motion-polish.css. Conservar cualquier cambio posterior ajeno a esta pasada. No ejecutar git reset --hard ni sincronizar con eliminación indiscriminada.

Corrección del 17/09: se descartaron las máscaras, sustituciones de líneas y marcador animado de navegación. La capa nueva anima únicamente contenido interno mediante IntersectionObserver y Web Animations, sin ocultación persistente ni cambios de layout. Las animaciones se cancelan al terminar y al cambiar de idioma o preferencia de movimiento.

Verificación: build y lint correctos; prueba del controlador de scroll de 850 ms correcta en ambas direcciones y con movimiento reducido. En navegador, las 12 secciones conservan 720px y no tienen desborde interno a 1280×720; navbar de 60px. Cambio ES/EN funcional y sin overflow horizontal en viewport móvil de 390px. Se habilitó temporalmente la capa de animación para inspeccionarla en el navegador de pruebas; ese bypass fue retirado. La versión final respeta prefers-reduced-motion. El diseño y controlador de scroll originales no se modificaron.

Protegidos: components/section-alignment.tsx, todas las reglas de dimensiones existentes, textos ES/EN, imágenes y orden de secciones.

Pasada ampliada: secuencia hero (imagen, logo, titular, párrafo y CTA), proceso con 95 ms entre columnas y secuencia interna, filas y formulario con 85 ms de stagger, números con escala mínima e imágenes 1.025 → 1. Entrada CSS de cápsula sin cambio de posición final; microinteracciones de enlaces, botones, campos y apertura del acordeón. Se mantiene la alternativa segura de fade/translate para titulares, sin dividir texto ni sustituir bordes. Build, lint y prueba de scroll correctos. Comprobación desktop: 12 lienzos de 720px, sin desbordes. La copia original no se modificó.
