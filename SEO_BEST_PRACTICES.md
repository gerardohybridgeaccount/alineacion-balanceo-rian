# Guía de SEO y Optimización para Landing Pages (Vite + React)

Para un negocio local de **Alineación y Balanceo**, estas son las reglas de oro para dominar los resultados de búsqueda.

## 1. Arquitectura y Estructura (Técnico)
- **HTML Semántico:** 
  - Usar `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
  - Solo UN `<h1>` por página (ej: "Alineación y Balanceo Profesional en [Ciudad]").
- **Prerendering (SSG):** Fundamental para que los bots lean el contenido sin ejecutar JS.
- **Meta-tags Críticos:** 
  - `title`: Máximo 60 caracteres. Incluye palabra clave + marca.
  - `description`: Máximo 155 caracteres. Debe ser un llamado a la acción.
  - `Canonical URL`: Evita contenido duplicado.

## 2. SEO Local (Vital para el Negocio)
- **Schema Markup (JSON-LD):** Implementar el esquema de `LocalBusiness` o `AutoRepair`. Esto ayuda a aparecer en el "Map Pack" de Google.
- **NAP:** Nombre, Dirección y Teléfono deben ser idénticos en la web y en Google Maps.
- **Palabras Clave Locales:** "Alineación y balanceo cerca de mí", "Taller mecánico en [Barrio/Ciudad]".

## 3. Rendimiento (Core Web Vitals)
- **Imágenes:**
  - Formato `WebP` o `AVIF`.
  - Atributos `alt` descriptivos (ej: "Máquina de balanceo computarizado").
  - `Lazy loading` para imágenes fuera de la pantalla.
- **Fuentes:** Usar fuentes del sistema o cargarlas localmente para evitar saltos visuales (CLS).
- **Bundle Size:** Mantener el JS al mínimo. Evitar librerías pesadas si no son necesarias.

## 4. Accesibilidad (A11y)
- Contraste de colores adecuado.
- Navegación por teclado.
- Etiquetas `aria-label` en botones que solo tienen iconos.

## 5. Estrategia de Contenido
- **E-A-T (Expertise, Authoritativeness, Trustworthiness):** Mostrar certificaciones, años de experiencia y testimonios de clientes reales.
- **Sección de Preguntas Frecuentes (FAQ):** Usar el esquema de FAQ para ocupar más espacio en Google.
