# Solución: Navegador no carga

## Pasos para solucionar

### 1. Verificar que el servidor esté corriendo

Abre una terminal en Cursor y ejecuta:

```bash
npm run dev
```

Deberías ver algo como:
```
  VITE v5.4.21  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 2. Abrir en navegador

**Opción A: Navegador integrado de Cursor**
- Si el navegador integrado no carga, intenta:
  1. Cerrar y reabrir el panel del navegador
  2. Refrescar la página (F5 o Ctrl+R)
  3. Verificar que la URL sea `http://localhost:5173`

**Opción B: Navegador externo**
- Abre manualmente: http://localhost:5173
- O presiona `Ctrl+Click` en la URL que aparece en la terminal

### 3. Si sigue sin funcionar

**Verificar errores en la consola:**
1. Abre las DevTools del navegador (F12)
2. Revisa la pestaña "Console" para ver errores
3. Revisa la pestaña "Network" para ver si hay requests fallando

**Reiniciar el servidor:**
```bash
# Detener el servidor (Ctrl+C en la terminal)
# Luego volver a iniciar:
npm run dev
```

**Verificar que no haya otro proceso usando el puerto:**
```bash
# En PowerShell:
netstat -ano | findstr :5173
```

### 4. Verificar archivos creados

Asegúrate de que estos archivos existan:
- ✅ `src/routes/(web)/+page.svelte`
- ✅ `src/routes/(web)/+layout.svelte`
- ✅ `src/lib/components/sections/Hero.svelte`
- ✅ `src/lib/components/sections/ServiceCards.svelte`
- ✅ `tailwind.config.js`
- ✅ `src/app.css`

### 5. Si hay errores de compilación

Ejecuta:
```bash
npm run check
```

Esto te mostrará errores de TypeScript/Svelte.

---

## Estado actual del proyecto

✅ **Completado:**
- Proyecto SvelteKit inicializado
- Tailwind configurado con design tokens de Pencil
- Componentes: Button, Badge, Header, Footer, Hero, ServiceCards
- Página HOME con Hero y sección de servicios
- Estructura de rutas (web) creada

⏳ **Pendiente:**
- Conexión de wallet con viem
- Marketplace de NFTs
- Más secciones de HOME
