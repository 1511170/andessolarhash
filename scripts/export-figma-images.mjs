/**
 * Exporta imágenes del archivo Figma ANDES SOLAR HASH al proyecto.
 * Uso:
 *   1. En Figma: Personal settings → Account → Generate access token
 *   2. En la terminal: FIGMA_ACCESS_TOKEN=tu_token node scripts/export-figma-images.mjs
 *   En Windows (PowerShell): $env:FIGMA_ACCESS_TOKEN="tu_token"; node scripts/export-figma-images.mjs
 */

const FIGMA_FILE_KEY = '9Yz7rsHqdK9ITCLH9J2FdX';
const FIGMA_NODES = {
  '93:673': 'hero-robots-nft.png',      // Tres robots mineros (GRUPOCORRIENDO)
  '164:103': 'mockup-wallet-nft.png',   // Teléfono con NFT del robot
  '158:26': 'mockup-wallet-balance.png' // Teléfono con balance Bitcoin/POL
};

const token = process.env.FIGMA_ACCESS_TOKEN;
if (!token) {
  console.error('Falta FIGMA_ACCESS_TOKEN. Genera uno en Figma → Settings → Account → Personal access tokens.');
  process.exit(1);
}

const ids = Object.keys(FIGMA_NODES).join(',');
const url = `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${encodeURIComponent(ids)}&format=png&scale=2`;

const res = await fetch(url, {
  headers: { 'X-Figma-Token': token }
});
if (!res.ok) {
  console.error('Figma API error:', res.status, await res.text());
  process.exit(1);
}

const data = await res.json();
if (data.err) {
  console.error('Figma error:', data.err);
  process.exit(1);
}

const fs = await import('fs');
const path = await import('path');
const dir = path.join(process.cwd(), 'static', 'images');
fs.mkdirSync(dir, { recursive: true });

for (const [nodeId, imageUrl] of Object.entries(data.images || {})) {
  const filename = FIGMA_NODES[nodeId];
  if (!filename || !imageUrl) continue;
  console.log('Descargando', filename, '...');
  const imgRes = await fetch(imageUrl);
  if (!imgRes.ok) {
    console.error('Error descargando', filename, imgRes.status);
    continue;
  }
  const buf = Buffer.from(await imgRes.arrayBuffer());
  const outPath = path.join(dir, filename);
  fs.writeFileSync(outPath, buf);
  console.log('Guardado:', outPath);
}

console.log('Listo. Imágenes en static/images/');
