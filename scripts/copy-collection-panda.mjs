/**
 * Copia la imagen del robot Panda (S21XP) para la segunda card de Colecciones.
 * Ejecutar: node scripts/copy-collection-panda.mjs
 */
import fs from 'fs';
import path from 'path';

const srcLong = 'C:\\Users\\camilo\\.cursor\\projects\\c-Users-camilo-DEVS-andessolarhash\\assets\\c__Users_camilo_AppData_Roaming_Cursor_User_workspaceStorage_c34666e23ba6dc5775fe0fede78434b6_images_PANDA_1-9eecd1b8-4acb-4967-9820-45cd4637723e.png';
const src = process.platform === 'win32' ? '\\\\?\\' + srcLong : srcLong;
const dest = path.join(process.cwd(), 'src', 'lib', 'assets', 'collection-robot-panda.png');

try {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log('OK:', dest, fs.statSync(dest).size, 'bytes');
} catch (e) {
  console.error('Error:', e.message);
  process.exit(1);
}
