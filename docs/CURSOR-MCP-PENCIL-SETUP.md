# Configurar Pencil.dev MCP en Cursor

Para que Cursor pueda usar **Pencil.dev** (diseño en archivos `.pen`) vía MCP, haz lo siguiente.

---

## 1. Instalar la extensión Pencil en Cursor

1. Abre Cursor.
2. Abre el panel de extensiones: **Ctrl + Shift + X** (Windows/Linux) o **Cmd + Shift + X** (Mac).
3. Busca **"Pencil"**.
4. Instala la extensión oficial de Pencil.
5. Comprueba que aparezca el icono de Pencil en la barra del editor.

---

## 2. Verificar la conexión MCP

1. Ve a **Settings** (Configuración) de Cursor.
2. Entra en **Tools & MCP** (o la sección donde se listan los MCP servers).
3. Comprueba que **Pencil** aparezca en la lista de servidores MCP.
4. Si no aparece, **reinicia Cursor** y vuelve a comprobar.

Según la documentación de Pencil, el servidor MCP corre en local cuando Pencil está en uso; no suele hacer falta añadir manualmente un `mcp.json` si la extensión está instalada.

---

## 3. Tener Pencil en marcha

- Abre un archivo **`.pen`** en el proyecto, o
- Asegúrate de que la app/extensión Pencil esté activa.

Así el MCP de Pencil puede leer y modificar diseños.

---

## 4. Qué permite Pencil vía MCP

Con Pencil MCP conectado, la IA en Cursor puede:

- **Leer y modificar** archivos `.pen` (batch_design, batch_get).
- **Crear componentes** y design system en Pencil (botones, cards, formularios, etc.).
- **Variables y theming**: get_variables / set_variables (tokens, colores, tipografía).
- **Screenshots** del diseño (get_screenshot) para comparar con el código.
- **Generar config de Tailwind** a partir de variables del diseño.
- **Trabajar en paralelo** con Figma MCP: diseño en Pencil y/o referencia en Figma, código en SvelteKit + Tailwind.

Documentación oficial: [Pencil – AI Integration](https://docs.pencil.dev/getting-started/ai-integration).

---

## 5. Si algo falla

- **“Pencil no aparece en MCP”**: reinstala la extensión, reinicia Cursor y revisa de nuevo Settings → Tools & MCP.
- **“Need Cursor Pro”**: algunas funciones pueden requerir Cursor Pro; revisa la suscripción.
- **Claude Code**: en algunos flujos Pencil pide tener Claude Code CLI autenticado (`claude`); para uso básico en Cursor a veces basta con la extensión y que Pencil figure en MCP.

---

**Resumen:** Instala la extensión Pencil en Cursor, verifica en Settings → Tools & MCP que Pencil aparezca como MCP y abre un `.pen` cuando quieras usar diseño desde aquí. Yo no puedo agregar el MCP por ti; eso se hace desde la configuración de Cursor.
