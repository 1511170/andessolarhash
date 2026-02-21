# Imágenes del proyecto

## Imágenes locales (Builder.io)

Las imágenes que antes venían del CDN de Builder.io están descargadas en esta carpeta con el prefijo `builder-*`. Se descargaron con:

```bash
node scripts/download-builder-io-images.mjs
```

No hay referencias a `api.builder.io` en el código; todo apunta a `/images/...`.

## Imágenes del diseño Figma

Las imágenes de la página **marketplace** (tres robots, mockup wallet NFT, mockup balance) se obtienen desde Figma.

## Opción 1: Exportar con script (recomendado)

1. En **Figma**: menú → *Help* → *Account settings* (o [figma.com/settings](https://www.figma.com/settings)) → pestaña **Personal access tokens** → *Generate new token*. Copia el token.
2. En la terminal, desde la raíz del proyecto:

   **Windows (PowerShell):**
   ```powershell
   $env:FIGMA_ACCESS_TOKEN="tu_token_aqui"; npm run figma:export
   ```

   **Mac/Linux:**
   ```bash
   FIGMA_ACCESS_TOKEN=tu_token_aqui npm run figma:export
   ```

3. El script descargará las 3 imágenes desde el archivo *ANDES SOLAR HASH - KINTO* y las guardará aquí con los nombres que usa el código.

## Opción 2: Exportar a mano desde Figma

1. Abre el archivo [ANDES SOLAR HASH - KINTO](https://www.figma.com/design/9Yz7rsHqdK9ITCLH9J2FdX/) en Figma.
2. Selecciona cada elemento y exporta como PNG (2x):
   - **Tres robots** (grupo “GRUPOCORRIENDO” en el hero) → guardar como `hero-robots-nft.png`
   - **Teléfono con NFT** (mockup del robot S21+ en wallet) → `mockup-wallet-nft.png`
   - **Teléfono con balance** Bitcoin/POL → `mockup-wallet-balance.png`
3. Copia esos archivos en esta carpeta: `static/images/`.

---

Sin estas imágenes, en la app se verán los espacios en blanco o rotos donde van las fotos del diseño.
