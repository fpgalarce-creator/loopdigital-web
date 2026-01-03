# LoopDigital Web

Sitio promocional de LoopDigital con enfoque "agencia web": hero degradado azul, mockups locales y secciones listas para reemplazar contenidos.

## Requisitos previos
- Node.js 20+
- npm 9+

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```
Visita la URL que muestra la consola (por defecto http://localhost:5173). El scroll es suave entre las secciones de la landing.

## Build de producción
```bash
npm run build
```

## Preview del build
```bash
npm run preview
```

## Estructura clave
- `/src/App.tsx`: orquestación de la landing.
- `/src/components`: Navbar, SmartImage (carga local/remota con placeholder), ImageCarousel y Footer.
- `/src/sections`: Hero, BenefitsRow, Services, CTASection, Plans, Portfolio, About, Contact.
- `/src/lib/images.ts`: helper para rutas locales y `buildCloudinaryUrl` (usa `VITE_CLOUDINARY_CLOUD_NAME` y `VITE_CLOUDINARY_BASE_FOLDER`; si faltan, devuelve `null`).
- `/public/mockups`: mockups del hero (laptop y teléfono) listos para reemplazar.
- `/public/images`: fondos, íconos, carrusel y placeholders del portafolio.

## Personalización rápida
- **Textos y planes**: edita las secciones en `src/sections/*.tsx` (ej. `Hero.tsx`, `Plans.tsx`, `Services.tsx`).
- **Precios de planes**: modificar los valores del arreglo `plans` en `src/sections/Plans.tsx`.
- **Imágenes**: reemplaza los SVG/PNG en `public/images` y `public/mockups`. No se requiere tocar código; SmartImage soporta paths locales `/images/...` y `/mockups/...` o URLs remotas.
- **Carrusel**: sustituye los archivos en `public/images/carousel/` para cambiar las vistas de ejemplo.

## Notas de estilo
- Tailwind CSS mobile-first, con breakpoints mínimos: `<640px` (mobile), `640-1024px` (tablet), `>1024px` (desktop).
- Botones con altura mínima de 44px (accesibilidad).
- Navbar con menú hamburguesa en mobile y enlaces visibles en desktop.
- Cards de servicios y planes responden a 1/2/3 columnas según el breakpoint.

## Variables de entorno opcionales
Para habilitar URLs de Cloudinary sin romper la previsualización local, define en un `.env`:
```
VITE_CLOUDINARY_CLOUD_NAME=
VITE_CLOUDINARY_BASE_FOLDER=
```
Si no se configuran, la app usa las imágenes locales en `public/`.
