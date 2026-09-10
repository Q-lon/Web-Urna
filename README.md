# Urna Digital — prototipo web

Prototipo visual y navegable para una futura marca argentina de urnas físicas para mascotas con display integrado. La implementación evita afirmar especificaciones, precios, canales o datos institucionales no confirmados.

## Stack

- Next.js/Vinext, React y TypeScript
- Tailwind CSS 4 como motor de estilos, con dirección visual propia en `app/globals.css`
- Datos de contenido separados de los componentes
- Imágenes conceptuales provisorias generadas específicamente para este prototipo

## Instalación y ejecución

```bash
npm ci
npm run dev
```

El entorno local se abre por defecto en `http://localhost:5173`.

Para verificar una versión de producción:

```bash
npm run build
npm run lint
```

## Arquitectura

- `app/`: páginas, metadata, robots y sitemap.
- `components/`: navegación, footer, formulario, FAQ y piezas de presentación.
- `config/site.config.ts`: nombre, dominio, contacto, WhatsApp, formulario y video.
- `data/content.ts`: textos editoriales y pasos.
- `data/products.ts`: modelos y estructura preparada para datos futuros.
- `data/faqs.ts`: preguntas y estados de validación.
- `public/images/`: assets provisorios por categoría.
- `public/video/`: ubicación prevista para el video promocional.

## Dónde modificar cada cosa

- Textos principales: `data/content.ts`.
- Colores, tipografías y escalas: variables iniciales de `app/globals.css`.
- Imágenes: reemplazar archivos en `public/images/` y actualizar rutas en `data/products.ts` o componentes.
- Modelos: `data/products.ts`. Los campos `material`, `dimensions`, `display`, `colors`, `personalization`, `price` y `availability` están preparados y vacíos.
- Datos comerciales: `config/site.config.ts`. Si un dato es `null`, su interfaz dependiente no debe mostrarse.
- FAQs: `data/faqs.ts`.
- Formulario: configurar `formEndpoint` cuando exista un backend real. Mientras sea `null`, funciona únicamente en modo demo.
- WhatsApp: asignar el número oficial a `whatsapp`; mientras sea `null`, el botón no se renderiza.
- Video: copiar el archivo a `public/video/` y asignar su ruta a `videoUrl`. La sección ya soporta `poster`, `controls`, `playsInline` y `muted`.

## Estado provisional

Los registros usan `confirmed`, `placeholder` o `pending-client-validation`. La mayor parte del contenido actual es placeholder o requiere validación. Las imágenes no representan un producto fabricado ni confirman materiales, tamaño o tecnología.

No se incluyen e-commerce, pagos, backend, CMS, usuarios, login, QR, NFC, nube, aplicación, analytics ni integraciones externas.

## Dominio y deployment

El sitio es portable. Cuando el cliente confirme el dominio:

1. completar `domain` en `config/site.config.ts` con origen HTTPS;
2. volver a compilar para habilitar canonicales/sitemap si se agregan;
3. publicar la salida con un proveedor compatible con el proyecto;
4. configurar DNS únicamente desde el registrador confirmado;
5. verificar HTTPS, redirects, variables de entorno y recepción real del formulario.

No se modificó DNS ni se asumió registrador, hosting o proveedor de correo.
