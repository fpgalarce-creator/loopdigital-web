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
- `/src/lib/images.ts`: helper centralizado para rutas locales, detección de Cloudinary y resolución de imágenes con fallback seguro.
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

## Gestión de imágenes
- **Locales (por defecto)**: mantén los archivos en `public/images/...` y `public/mockups/...`. Usa rutas relativas con los helpers `getLocalImage` y `getMockupImage`, o pásalas a `<SmartImage localSrc="/images/..." />` sin tocar estilos ni layout.
- **Cloudinary (opcional)**: define `VITE_CLOUDINARY_CLOUD_NAME` y, si usas un prefijo común, `VITE_CLOUDINARY_BASE_FOLDER`. Al proveer `cloudPublicId` en `SmartImage`, la URL se generará con `f_auto,q_auto,dpr_auto` y las dimensiones solicitadas.
  - Ejemplo de `cloudPublicId`: `loopdigital/hero/hero-bg` (se combina con `VITE_CLOUDINARY_BASE_FOLDER` si existe).
- **Helper reutilizable**:
  - `cloudinaryEnabled()` indica si hay `VITE_CLOUDINARY_CLOUD_NAME` configurada.
  - `buildCloudinaryUrl(publicId, opts)` arma la URL con transformaciones responsivas (`width`, `height`, `crop` opcionales).
  - `resolveImage({ localSrc, cloudPublicId, width })` elige Cloudinary si está disponible y tiene ID, o vuelve a la ruta local. Siempre devuelve un placeholder SVG si falta todo, asegurando que el layout no colapse.
