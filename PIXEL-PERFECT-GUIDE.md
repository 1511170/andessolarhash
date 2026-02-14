# 🎨 Guía Completa: Figma → Código Pixel-Perfect

**Proyecto:** Andes Solar Hash
**Stack:** SvelteKit + Tailwind CSS 4 + Web3
**Objetivo:** Implementación pixel-perfect del diseño Figma

---

## ✅ SÍ, ES POSIBLE (Con el proceso correcto)

**Respuesta corta:** Absolutamente sí, se puede lograr pixel-perfect.

**Respuesta completa:** Requiere que el Figma esté bien estructurado primero. Con el Figma actual (calificación 4/10) será **difícil y propenso a inconsistencias**. Con el Figma refactorizado será **fácil y preciso**.

---

## 🚨 Estado Actual vs Estado Ideal

### Estado Actual del Figma (4/10)
```
❌ 0 componentes definidos
❌ Design system incompleto (3 estilos)
❌ Valores inconsistentes (spacing, colores)
❌ Desorganizado
❌ Difícil medir valores exactos
```

**Resultado de trabajar con esto:**
- ⚠️ Tendrás que medir manualmente cada elemento
- ⚠️ Spacing inconsistente (23px aquí, 25px allá)
- ⚠️ Colores ligeramente diferentes (#e0831f vs #e0841f)
- ⚠️ Tamaños de texto variables
- ⚠️ Mucho trial & error
- ⚠️ Imposible validar si está correcto

### Estado Ideal del Figma (9-10/10)
```
✅ Componentes bien definidos
✅ Design system completo (variables)
✅ Auto layout en todo
✅ Spacing consistente (8px scale)
✅ Dev Mode activado
✅ Fácil de extraer valores
```

**Resultado de trabajar con esto:**
- ✅ Valores exactos en Dev Mode
- ✅ Spacing consistente (grid de 8px)
- ✅ Colores exactos de variables
- ✅ Copy CSS directo
- ✅ Componentes 1:1 con código
- ✅ Fácil validar pixel-perfect

---

## 🎯 El Camino a Pixel-Perfect

### Opción A: Refactorizar Figma Primero → Desarrollo Fácil (RECOMENDADO) ⭐

**Tiempo total:** 1-2 días Figma + 18-25 días desarrollo = **20-27 días**

**Proceso:**
```
┌─────────────────────────────────────────┐
│  1. REFACTORIZAR FIGMA (1-2 días)      │
│     • Crear design system completo      │
│     • Componentizar todo                │
│     • Aplicar auto layout               │
│     • Definir variables                 │
│     • Organizar páginas                 │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  2. EXTRAER DESIGN TOKENS               │
│     • Colores → tailwind.config.js      │
│     • Tipografía → config                │
│     • Spacing → config                  │
│     • Exportar assets (SVG, imágenes)   │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  3. CREAR COMPONENTES BASE              │
│     • Button (todas variantes)          │
│     • Input, Textarea, etc.             │
│     • Cards                             │
│     • Layout components                 │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  4. CONSTRUIR PÁGINAS                   │
│     • Usar componentes                  │
│     • Seguir Figma exactamente          │
│     • Validar en cada paso              │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  5. VALIDAR PIXEL-PERFECT               │
│     • Overlay de Figma en browser       │
│     • Comparación visual                │
│     • Ajustes finales                   │
└─────────────────────────────────────────┘
```

**Ventajas:**
- ✅ Pixel-perfect garantizado
- ✅ Desarrollo más rápido
- ✅ Menos bugs visuales
- ✅ Fácil de mantener
- ✅ Single source of truth
- ✅ Consistencia 100%

**Desventajas:**
- ⚠️ Requiere 1-2 días iniciales de Figma
- ⚠️ No muestra código inmediatamente

---

### Opción B: Desarrollo Directo con Figma Actual → Desarrollo Difícil

**Tiempo total:** 25-35 días (más lento por iteraciones)

**Proceso:**
```
┌─────────────────────────────────────────┐
│  1. TOMAR SCREENSHOTS                   │
│     • Cada página                       │
│     • Cada estado                       │
│     • Cada breakpoint                   │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  2. EXTRAER MANUALMENTE                 │
│     • Color picker para colores         │
│     • Medir spacing con regla           │
│     • Leer tamaños de texto             │
│     • Adivinar sombras                  │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  3. CREAR COMPONENTES (trial & error)   │
│     • Escribir CSS/Tailwind             │
│     • Probar valores                    │
│     • Ajustar hasta que "se vea bien"   │
│     • Repetir en cada página            │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  4. ITERAR MUCHO                        │
│     • Comparar con Figma                │
│     • Encontrar inconsistencias         │
│     • Ajustar                           │
│     • Repetir                           │
└─────────────────────────────────────────┘
```

**Ventajas:**
- ✅ Empiezas a codear ya
- ✅ Muestras progreso rápido

**Desventajas:**
- ❌ Nunca será 100% pixel-perfect
- ❌ Mucho trial & error
- ❌ Inconsistencias entre páginas
- ❌ Difícil de validar
- ❌ Más tiempo total
- ❌ Difícil de mantener

---

## 📝 Proceso Detallado: Refactorizar Figma → Código Pixel-Perfect

### FASE 1: Refactorización del Figma (1-2 días)

#### Día 1: Design System

**1. Crear página "Design System"**

**Colores (2 horas):**
```
Definir paleta completa:

Primary (Naranja - Solar):
├── primary-50   #fff7ed
├── primary-100  #ffedd5
├── primary-200  #fed7aa
├── primary-300  #fdba74
├── primary-400  #f7ad1f  ← Del gradiente Figma
├── primary-500  #e0831f  ← PRINCIPAL del gradiente
├── primary-600  #c87319
├── primary-700  #a65f14
├── primary-800  #844c10
└── primary-900  #713f0d

Secondary (Azul - Tech):
├── secondary-50   #f5f7fa
├── secondary-500  #1d2242  ← Del gradiente Figma
├── secondary-800  #101429  ← Del gradiente Figma
└── secondary-900  #0a0d1c

Neutrals (Grises):
├── neutral-50   #f9fafb
├── neutral-100  #f3f4f6
├── ...
└── neutral-900  #111827

Semantic:
├── success  #10b981
├── error    #ef4444
├── warning  #f59e0b
└── info     #3b82f6
```

**Acción en Figma:**
- Crear rectangulos con cada color
- Aplicar "Create style" a cada uno
- Nombrar: "Primary/500", "Neutral/200", etc.
- Crear variables de Figma para cada color

**Tipografía (2 horas):**
```
Font Family: Inter (mantener del Figma)

Display:
├── Display 1: 64px / Bold / 72px LH
└── Display 2: 56px / Bold / 64px LH

Headings:
├── H1: 48px / Bold / 56px LH
├── H2: 36px / Bold / 44px LH
├── H3: 30px / Semibold / 38px LH
├── H4: 24px / Semibold / 32px LH
├── H5: 20px / Semibold / 28px LH
└── H6: 16px / Semibold / 24px LH

Body:
├── Body Large: 18px / Regular / 28px LH
├── Body Base: 16px / Regular / 24px LH  ← Ya existe
└── Body Small: 14px / Regular / 20px LH

Utility:
├── Caption: 12px / Regular / 16px LH
└── Label: 14px / Medium / 20px LH
```

**Acción en Figma:**
- Crear texto de ejemplo para cada estilo
- Aplicar "Create text style" a cada uno
- Nombrar: "Heading/H1", "Body/Large", etc.
- Usar variables de Figma

**Spacing (1 hora):**
```
Scale de 8px:
├── xs:   4px   (0.5 units)
├── sm:   8px   (1 unit)
├── md:   16px  (2 units)
├── lg:   24px  (3 units)
├── xl:   32px  (4 units)
├── 2xl:  48px  (6 units)
├── 3xl:  64px  (8 units)
├── 4xl:  80px  (10 units)
└── 5xl:  96px  (12 units)
```

**Acción en Figma:**
- Crear variables para cada spacing
- Documentar en frame de "Spacing Scale"

**Effects (1 hora):**
```
Shadows:
├── shadow-sm:    0 1px 2px rgba(0,0,0,0.05)
├── shadow-md:    0 4px 6px rgba(0,0,0,0.1)
├── shadow-lg:    0 10px 15px rgba(0,0,0,0.1)
├── shadow-xl:    0 20px 25px rgba(0,0,0,0.1)
├── shadow-2xl:   0 25px 50px rgba(0,0,0,0.25)
├── shadow-card:  0 2px 8px rgba(0,0,0,0.08)
├── shadow-nft:   0 4px 12px rgba(224,131,31,0.15)
└── shadow-btn:   0 4px 12px rgba(224,131,31,0.3)
```

**Acción en Figma:**
- Crear effect styles para cada sombra
- Aplicar a ejemplos visuales

#### Día 2: Componentes

**2. Crear página "Components"**

**Botones (2 horas):**
```
Component Set: "Button"

Variants:
├── variant: primary, secondary, outline, ghost
├── size: sm, md, lg
└── state: default, hover, active, disabled

Properties:
├── icon: boolean
└── fullWidth: boolean

Ejemplo:
Button/primary/md/default
Button/secondary/lg/hover
Button/outline/sm/disabled
```

**Acción:**
- Crear component set en Figma
- Usar auto layout
- Aplicar spacing con variables
- Aplicar colores con styles
- Documentar cada variante

**Forms (2 horas):**
```
Components:
├── Input (text, email, password, etc.)
├── Textarea
├── Checkbox
├── Radio
├── Select

States para cada uno:
├── default
├── focus
├── error
├── success
└── disabled
```

**Cards (2 horas):**
```
Components:
├── NFTCard
├── BlogCard
├── ProductCard
└── TestimonialCard

Cada uno con:
├── Auto layout
├── Variables de spacing
├── Styles de color
└── Text styles aplicados
```

**Navigation (1 hora):**
```
Components:
├── Header/Desktop
├── Header/Mobile
├── Footer
└── NavLink (active, inactive)
```

**Web3 Components (1 hora):**
```
Components específicos Web3:
├── ConnectWallet
├── WalletInfo
├── NetworkBadge
└── TransactionStatus
```

**3. Aplicar Componentes a Páginas (2-3 horas)**
- Reemplazar elementos en HOME
- Reemplazar en todas las páginas desktop
- Reemplazar en todas las páginas mobile
- Verificar consistencia

---

### FASE 2: Extracción de Design Tokens (2-3 horas)

**1. Activar Dev Mode en Figma**
- Shift + D para entrar en Dev Mode
- Seleccionar cualquier elemento
- Ver valores exactos de CSS

**2. Extraer Colores**

Usar Figma Dev Mode o plugin:
- Plugin recomendado: "Design Tokens" o "Figma Tokens"
- Exportar como JSON

**Resultado:**
```json
// design-tokens.json
{
  "colors": {
    "primary": {
      "50": "#fff7ed",
      "500": "#e0831f",
      "900": "#713f0d"
    },
    "secondary": {
      "500": "#1d2242",
      "800": "#101429"
    }
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px"
  },
  "typography": {
    "h1": {
      "fontSize": "48px",
      "lineHeight": "56px",
      "fontWeight": "700"
    }
  }
}
```

**3. Convertir a tailwind.config.js**

```javascript
// tailwind.config.js
import tokens from './design-tokens.json';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        secondary: tokens.colors.secondary,
        neutral: tokens.colors.neutral,
        // ... etc
      },
      fontSize: {
        'h1': [tokens.typography.h1.fontSize, {
          lineHeight: tokens.typography.h1.lineHeight,
          fontWeight: tokens.typography.h1.fontWeight
        }],
        // ... etc
      },
      spacing: tokens.spacing,
      boxShadow: tokens.shadows,
      borderRadius: tokens.borderRadius,
    }
  },
  plugins: []
}
```

**4. Exportar Assets**
- Exportar todos los SVG (iconos, logos)
- Exportar imágenes en 1x, 2x, 3x
- Exportar NFT placeholders
- Organizar en carpetas

---

### FASE 3: Crear Componentes Base (3-4 días)

**Metodología: 1:1 Component Mapping**

Por cada componente en Figma → Crear componente en Svelte

**Ejemplo: Button Component**

**Del Figma (Dev Mode):**
```
Component: Button/primary/md/default
├── Width: hug (auto)
├── Height: 48px
├── Padding: 16px 24px
├── Gap: 8px
├── Border radius: 12px
├── Background: primary-500 (#e0831f)
├── Text: Body/Base (16px/Medium)
├── Shadow: shadow-button
└── Hover: background → primary-600
```

**Al Código (Svelte):**
```svelte
<!-- lib/components/ui/Button.svelte -->
<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let disabled = false;
  export let fullWidth = false;
  export let href: string | undefined = undefined;

  const variants = {
    primary: 'bg-primary-500 text-white shadow-button hover:bg-primary-600 active:bg-primary-700',
    secondary: 'bg-secondary-500 text-white shadow-button hover:bg-secondary-600',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
    ghost: 'text-primary-500 hover:bg-primary-50'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5 rounded-lg',      // 16px 8px, gap 6px, radius 8px
    md: 'px-6 py-3 text-base gap-2 rounded-xl',      // 24px 12px, gap 8px, radius 12px
    lg: 'px-8 py-4 text-lg gap-2.5 rounded-2xl'      // 32px 16px, gap 10px, radius 16px
  };

  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200';
  const disabledClasses = 'opacity-50 cursor-not-allowed pointer-events-none';
  const widthClass = fullWidth ? 'w-full' : '';

  $: classes = [
    baseClasses,
    variants[variant],
    sizes[size],
    disabled && disabledClasses,
    widthClass
  ].filter(Boolean).join(' ');

  const Element = href ? 'a' : 'button';
</script>

<Element
  {href}
  class={classes}
  disabled={!href && disabled}
  on:click
>
  <slot />
</Element>
```

**Validación:**
1. Abrir Figma y navegador lado a lado
2. Seleccionar botón en Figma
3. Inspeccionar botón en browser
4. Comparar valores:
   - ✅ Padding: 24px 16px → `px-6 py-3` (24px 12px) - AJUSTAR
   - ✅ Border radius: 12px → `rounded-xl` ✓
   - ✅ Font size: 16px → `text-base` ✓
   - ✅ Color: #e0831f → `bg-primary-500` ✓
   - ✅ Shadow: ✓

**Repetir para todos los componentes:**
- Input
- Textarea
- Checkbox
- Radio
- Card
- etc.

---

### FASE 4: Construir Páginas (4-5 días)

**Metodología: Top to Bottom**

**1. Preparar Overlay de Figma**

Usar extensión de Chrome: **"Figma to Code"** o **"PixelParallel"**

O método manual:
1. Exportar página de Figma como PNG a 1x
2. Usar extensión "Perfect Pixel"
3. Cargar PNG como overlay
4. Ajustar opacidad al 50%
5. Construir debajo del overlay

**2. Construir Sección por Sección**

**Ejemplo: Hero Section de HOME**

**Del Figma:**
```
Hero Section:
├── Container: max-width 1200px, padding 0 24px
├── Layout: flex, gap 64px
├── Left column (60%):
│   ├── Heading: H1 style
│   ├── Paragraph: Body Large
│   └── Buttons: flex gap 16px
└── Right column (40%):
    └── Image: aspect-ratio 1:1, rounded-2xl
```

**Al Código:**
```svelte
<!-- routes/(web)/+page.svelte -->
<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="py-20 lg:py-28">
  <!-- Container exacto del Figma -->
  <div class="max-w-[1200px] mx-auto px-6">

    <!-- Layout exacto del Figma -->
    <div class="flex flex-col lg:flex-row gap-16 items-center">

      <!-- Left column - 60% -->
      <div class="flex-1 lg:w-[60%]">
        <h1 class="text-h1 font-bold text-neutral-800 mb-6">
          Invierte en el Futuro de la Energía Solar
        </h1>

        <p class="text-body-lg text-neutral-600 mb-8">
          Adquiere NFTs que representan paneles solares reales en los Andes.
          Genera ingresos pasivos mientras apoyas energía renovable.
        </p>

        <!-- Buttons con spacing exacto -->
        <div class="flex gap-4">
          <Button variant="primary" size="lg" href="/marketplace">
            Explorar NFTs
          </Button>
          <Button variant="outline" size="lg" href="/about">
            Cómo Funciona
          </Button>
        </div>
      </div>

      <!-- Right column - 40% -->
      <div class="flex-1 lg:w-[40%]">
        <img
          src="/images/hero-solar-panel.png"
          alt="Panel Solar en los Andes"
          class="w-full aspect-square object-cover rounded-2xl shadow-card"
        />
      </div>
    </div>
  </div>
</section>
```

**3. Validación Sección por Sección**

Checklist por sección:
- [ ] Spacing vertical (py-20 = 80px)
- [ ] Container width (max-w-[1200px])
- [ ] Padding horizontal (px-6 = 24px)
- [ ] Gap entre columnas (gap-16 = 64px)
- [ ] Heading: tamaño, weight, color
- [ ] Paragraph: tamaño, line-height, color
- [ ] Button spacing (gap-4 = 16px)
- [ ] Image: aspect ratio, border radius, shadow
- [ ] Responsive breakpoint (lg:)

**Herramienta de medición:**
1. Click derecho en navegador
2. Inspeccionar elemento
3. Ver "Computed" tab
4. Verificar cada valor contra Figma

---

### FASE 5: Validación Pixel-Perfect (2-3 días)

**1. Overlay Visual**

**Método 1: Perfect Pixel (Chrome Extension)**
```
1. Instalar "Perfect Pixel by WellDoneCode"
2. Subir screenshot de Figma
3. Ajustar posición y opacidad
4. Comparar lado a lado
5. Ajustar diferencias
```

**Método 2: Figma Mirror**
```
1. Abrir Figma en una pantalla
2. Abrir desarrollo en otra pantalla
3. Poner lado a lado en mismo tamaño
4. Comparar visualmente
5. Usar regla para medir
```

**2. Checklist de Validación**

**Por cada página:**
```
Layout:
├── [ ] Container width correcto
├── [ ] Padding horizontal correcto
├── [ ] Spacing vertical entre secciones
└── [ ] Grid/Flexbox correcto

Typography:
├── [ ] Font family correcta
├── [ ] Font sizes exactos
├── [ ] Line heights exactos
├── [ ] Font weights correctos
├── [ ] Letter spacing (si aplica)
└── [ ] Text colors exactos

Colors:
├── [ ] Backgrounds exactos
├── [ ] Text colors exactos
├── [ ] Border colors exactos
└── [ ] Gradient directions y stops

Spacing:
├── [ ] Margins exactos
├── [ ] Paddings exactos
├── [ ] Gaps exactos
└── [ ] Consistent con design system

Effects:
├── [ ] Shadows exactas
├── [ ] Border radius exactos
├── [ ] Opacity valores
└── [ ] Transitions/animations

Images:
├── [ ] Aspect ratios correctos
├── [ ] Object-fit correcto
├── [ ] Border radius
└── [ ] Shadows

Responsive:
├── [ ] Mobile (375px) correcto
├── [ ] Tablet (768px) correcto
├── [ ] Desktop (1200px+) correcto
└── [ ] Breakpoints bien definidos
```

**3. Herramientas de Validación**

**A) Browser DevTools**
```javascript
// Console snippet para medir spacing
function measureSpacing() {
  const elements = document.querySelectorAll('*');
  elements.forEach(el => {
    const computed = window.getComputedStyle(el);
    const mt = parseInt(computed.marginTop);
    const mb = parseInt(computed.marginBottom);

    // Verificar que sea múltiplo de 8 (design system)
    if (mt % 8 !== 0 || mb % 8 !== 0) {
      console.warn('Spacing no múltiplo de 8:', el, {mt, mb});
    }
  });
}
```

**B) Visual Regression Testing**
```bash
# Usar herramienta como Percy o Chromatic
npm install --save-dev @chromatic-com/chromatic

# Tomar screenshots automáticos
npx chromatic --project-token=<tu-token>
```

**C) Accessibility Check**
```bash
# Lighthouse audit
npm install -g lighthouse

lighthouse http://localhost:5173 --view
```

---

## 🛠️ Herramientas Esenciales

### Para Diseño
1. **Figma Desktop App** (mejor que browser para Dev Mode)
2. **Figma Plugins:**
   - "Design Tokens" - Exportar tokens
   - "Figma to Code" - Generar código
   - "Iconify" - Iconos
   - "Unsplash" - Imágenes placeholder

### Para Desarrollo
1. **VS Code Extensions:**
   - "Tailwind CSS IntelliSense"
   - "Svelte for VS Code"
   - "Color Highlight"
   - "CSS Peek"

2. **Chrome Extensions:**
   - "Perfect Pixel"
   - "WhatFont"
   - "ColorZilla" (color picker)
   - "Dimensions" (medir elementos)
   - "React DevTools" (si usas React)

3. **Utilidades:**
   - "Figma Mirror" app (iOS/Android)
   - "Zeplin" (alternativa a Figma Dev Mode)

---

## 💡 Tips para Pixel-Perfect

### 1. Usa el Sistema de 8px
```css
/* BIEN - múltiplos de 8 */
padding: 8px;    /* sm */
padding: 16px;   /* md */
padding: 24px;   /* lg */
padding: 32px;   /* xl */

/* MAL - valores random */
padding: 13px;
padding: 27px;
```

### 2. Configura Tailwind con Valores Exactos
```javascript
// tailwind.config.js
theme: {
  extend: {
    spacing: {
      '18': '4.5rem',  // 72px (gap específico del diseño)
      '88': '22rem',   // 352px (spacing específico)
    }
  }
}
```

### 3. Usa Classes Arbitrarias de Tailwind
```html
<!-- Si Figma tiene valor específico que no está en Tailwind -->
<div class="max-w-[1200px]">    <!-- Exacto del Figma -->
<div class="gap-[72px]">         <!-- Gap específico -->
<div class="text-[17px]">        <!-- Tamaño específico -->
```

### 4. Documenta Desviaciones
```svelte
<!--
NOTA: Figma tiene 23px de padding, pero usamos 24px (3 units)
para mantener consistencia con design system de 8px.
Diferencia visual imperceptible.
-->
<div class="p-6">  <!-- 24px en lugar de 23px -->
```

### 5. Usa Variables CSS para Valores Compartidos
```css
/* global.css */
:root {
  --container-padding: 24px;
  --section-spacing: 80px;
  --card-radius: 16px;
}

@media (min-width: 1024px) {
  :root {
    --container-padding: 48px;
    --section-spacing: 120px;
  }
}
```

### 6. Testa en Múltiples Tamaños
```
Breakpoints a verificar:
├── 375px  (Mobile small - iPhone SE)
├── 390px  (Mobile - iPhone 12/13)
├── 428px  (Mobile large - iPhone 14 Pro Max)
├── 768px  (Tablet - iPad)
├── 1024px (Desktop small)
├── 1280px (Desktop medium)
├── 1440px (Desktop large)
└── 1920px (Desktop XL)
```

---

## 📊 Métricas de Pixel-Perfect

### Niveles de Precisión

**Nivel 1: Functional (85-90%)**
- ✅ Layout general correcto
- ✅ Colores aproximados
- ✅ Tipografía similar
- ⚠️ Spacing variable (±5px)
- ⚠️ Algunas inconsistencias

**Nivel 2: High Quality (90-95%)**
- ✅ Layout exacto
- ✅ Colores exactos
- ✅ Tipografía exacta
- ✅ Spacing consistente (±2px)
- ⚠️ Pequeñas variaciones aceptables

**Nivel 3: Pixel-Perfect (98-100%)** ⭐
- ✅ Todo exactamente igual al Figma
- ✅ 0 diferencias visuales
- ✅ Spacing perfecto
- ✅ Validado con overlay
- ✅ Responsive perfecto

**Objetivo para Andes Solar Hash: Nivel 2-3**

---

## 🎯 Resumen: El Camino Recomendado

### Semana 1-2: Refactorizar Figma
```
Días 1-2: Design System
├── Colores
├── Tipografía
├── Spacing
└── Effects

Días 3-4: Componentes
├── Buttons
├── Forms
├── Cards
└── Navigation

Día 5: Aplicar y Organizar
├── Reemplazar en páginas
└── Reorganizar archivo
```

### Semana 3: Setup + Extracción
```
Días 1-2: Setup Proyecto
├── SvelteKit + Tailwind
├── Web3 infrastructure
└── Folder structure

Días 3-5: Extracción
├── Design tokens
├── Assets export
└── tailwind.config.js
```

### Semanas 4-5: Componentes Base
```
Implementar componentes 1:1 con Figma:
├── UI components (Button, Input, etc.)
├── Web3 components (ConnectWallet, NFTCard)
└── Layout components

Validar cada uno con Figma overlay
```

### Semanas 6-7: Páginas
```
Construir páginas:
├── HOME
├── Marketplace
├── NFT Detail
├── Blog
├── Contact
└── My NFTs

Validar cada sección con checklist
```

### Semana 8: Validación Final
```
├── Visual regression testing
├── Responsive testing
├── Overlay validation
└── Ajustes finales
```

**RESULTADO: Pixel-perfect garantizado** ✅

---

## ✅ Conclusión

### ¿Es posible pixel-perfect? **SÍ**

### ¿Con el Figma actual? **DIFÍCIL**

### ¿Con Figma refactorizado? **FÁCIL**

### ¿Tiempo total?
- **Sin refactorizar Figma:** 25-35 días, ~90% precisión
- **Con refactorizar Figma:** 20-27 días, ~98% precisión

### ¿Recomendación?
**Refactorizar Figma primero**
- Inversión: 1-2 días
- Ahorro: 5-10 días de desarrollo
- Resultado: Pixel-perfect garantizado
- Mantenibilidad: Excelente

---

**Estado:** Documentado y listo para implementar
**Próximo paso:** Decidir si refactorizamos Figma o empezamos desarrollo directo
