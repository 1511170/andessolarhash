/**
 * Copia las 2 imágenes del mockup NFT (teléfono + sombra) desde Cursor al proyecto.
 * Ejecutar: node scripts/copy-mockup-nft-images.mjs
 */
import fs from 'fs';
import path from 'path';

const base = 'C:\\Users\\camilo\\.cursor\\projects\\c-Users-camilo-DEVS-andessolarhash\\assets\\c__Users_camilo_AppData_Roaming_Cursor_User_workspaceStorage_c34666e23ba6dc5775fe0fede78434b6_images_';
const prefix = process.platform === 'win32' ? '\\\\?\\' : '';

const files = [
  { src: base + 'SOMBRA-15c56ecd-4ced-4cd2-bc08-a10661bb9682.png', dest: 'mockup-wallet-nft-sombra.png' },
  { src: base + 'adfd0950-1a5c-47b2-96c0-44e90d492db2-removebg-preview_2-96aae11c-9936-4efa-b9fd-d424ab8f040e.png', dest: 'mockup-wallet-nft.png' }
];

const destDir = path.join(process.cwd(), 'src', 'lib', 'assets');
fs.mkdirSync(destDir, { recursive: true });

for (const { src, dest } of files) {
  const srcPath = process.platform === 'win32' ? prefix + src : src;
  const destPath = path.join(destDir, dest);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log('OK:', dest, fs.statSync(destPath).size, 'bytes');
  } catch (e) {
    console.error('Error', dest, e.message);
  }
}
