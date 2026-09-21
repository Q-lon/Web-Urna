# Primera preview — ShantiBond

## Limpieza del 16/09/2026

Se retiraron 70 archivos sin referencias de ejecución: biblioteca UI de plantilla, hook móvil asociado, componente RevealQuote obsoleto, tres SVG de plantilla y cuatro fotografías descartadas. Copia recuperable fuera del proyecto: `C:/Users/Feli/Documents/ChatGPT/URNA-DIGITAL-cleanup-20260916`.

Se conservan las rutas existentes, imágenes todavía referenciadas, material del cliente, prompts, dependencias y configuración de hosting. La limpieza no modifica el diseño, las alturas ni el controlador de scroll. No se publica automáticamente como parte de esta revisión.

## Antes de compartir

- Revisar visualmente desktop y móvil, navegación, scroll entre secciones y acordeones.
- Confirmar los textos comerciales y el estado de registros con el cliente.
- El formulario prepara un email en la aplicación de correo; no tiene envío desde servidor.
- Elegir el acceso de la preview para que el cliente pueda abrirla.
- Publicar una versión de revisión en una URL HTTPS; localhost no es compartible directamente.
- Enviar el enlace por email o WhatsApp como primera propuesta visual, con contenido sujeto a validación.

## Archivos principales

- Landing: `app/page.tsx` y `components/client-story.tsx`.
- Contenido: `data/shantibond.ts`.
- Estilos: `app/globals.css`, `app/polish.css`, `app/editorial.css`.
- Navegación entre secciones: `components/section-alignment.tsx`.
- Contacto: `components/partner-contact.tsx`.
