/**
 * Descarga todas las imágenes que el proyecto usa desde Builder.io (TEMP)
 * y las guarda en static/images/ con nombres estables.
 * Uso: node scripts/download-builder-io-images.mjs
 *
 * Después de ejecutar, las referencias en el código deben apuntar a /images/<nombre>.png
 */

const BASE = 'https://api.builder.io/api/v1/image/assets/TEMP';
const WIDTH = 1200; // descarga en buena resolución; el navegador escala

// Hash (id Builder.io) -> nombre local. Un archivo por hash.
const MAP = {
  '0dbc0291f79bb3a13cbd9273562d913916155838': 'builder-hero-bg.png',
  '275b45d5001dc298a90f7d0d73f19d3c144e6b7d': 'builder-antminer-card.png',
  'bf3c37a8977865906dce2c550d7508ec862fb9ee': 'builder-antminer-s21-xp.png',
  '4a484b81c5235b15b20921f4de326e8c06c2537e': 'builder-services-hero.png',
  '5d6d944672a1cd3b343112d6a46bc35614cbc64d': 'builder-product-miner.png',
  'b9526f1f3adf9c9317a52e2314617a3b66a8a378': 'builder-service-wallet.png',
  '116dd5d02463a9aac6f70b67328f79b3ee1db3e2': 'builder-hosting-hero.png',
  'b53493c4a6e2068d545a02853f5c9faf2212ca2e': 'builder-nft-product.png',
  '5f7078439de44e6f0734c0bab6f9ba1e89e2858b': 'builder-blog-halving.png',
  '4468f585352a304995b5043f4c8efc99ffc00413': 'builder-blog-kwh.png',
  '9cdcc3e8a91c832e2d23d0e3b911d1082f46bbee': 'builder-blog-legal.png'
};

const fs = await import('fs');
const path = await import('path');
const dir = path.join(process.cwd(), 'static', 'images');
fs.mkdirSync(dir, { recursive: true });

for (const [hash, filename] of Object.entries(MAP)) {
  const url = `${BASE}/${hash}?width=${WIDTH}`;
  console.log('Descargando', filename, '...');
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error('  Error', res.status, url);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const outPath = path.join(dir, filename);
    fs.writeFileSync(outPath, buf);
    console.log('  Guardado:', outPath);
  } catch (e) {
    console.error('  Error:', e.message);
  }
}

console.log('Listo. Imágenes en static/images/');
