/**
 * Copia la imagen del robot S21+ (BLACK 3) para la primera card de Colecciones.
 * Ejecutar: node scripts/copy-collection-robot.mjs
 */
import fs from 'fs';
import path from 'path';

const srcLong = 'C:\\Users\\camilo\\.cursor\\projects\\c-Users-camilo-DEVS-andessolarhash\\assets\\c__Users_camilo_AppData_Roaming_Cursor_User_workspaceStorage_c34666e23ba6dc5775fe0fede78434b6_images_BLACK_3-e9023223-6121-4053-bdeb-1a0335f3b7bf.png';
const src = process.platform === 'win32' ? '\\\\?\\' + srcLong : srcLong;
const dest = path.join(process.cwd(), 'src', 'lib', 'assets', 'collection-robot-black.png');

try {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log('OK:', dest, fs.statSync(dest).size, 'bytes');
} catch (e) {
  console.error('Error:', e.message);
  process.exit(1);
}
