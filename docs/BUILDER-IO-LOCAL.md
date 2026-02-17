# Builder.io dev-tools (ejecución local)

El comando `code` de Builder.io requiere una **terminal TTY** (interactiva). No puede ejecutarse en entornos sin TTY.

Para obtener el código del HOME y reemplazar o refinar secciones:

```bash
npx "@builder.io/dev-tools@latest" code --url vcp://quickcopy/vcp-e8b8c009a9aa478cb0c090f930f4258b
```

Ejecutar en la raíz del proyecto desde una terminal con TTY (PowerShell, CMD, Git Bash con winpty si aplica). La salida (HTML/React) se puede pegar y convertir a Svelte.

La implementación actual del HOME en `src/routes/(web)/+page.svelte` y `src/lib/components/sections/` está hecha con el design system (Tailwind + componentes existentes). Puedes sustituir el contenido de cualquier sección por el generado por Builder.io tras convertirlo a Svelte y mapear estilos a `tailwind.config.js`.
