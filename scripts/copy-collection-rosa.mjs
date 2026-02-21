/**
 * Copia la imagen del robot Rosa (S21XP) para la tercera card de Colecciones.
 * Ejecutar: node scripts/copy-collection-rosa.mjs
 */
import fs from 'fs';
import path from 'path';

const srcLong = 'C:\\Users\\camilo\\.cursor\\projects\\c-Users-camilo-DEVS-andessolarhash\\assets\\c__Users_camilo_AppData_Roaming_Cursor_User_workspaceStorage_c34666e23ba6dc5775fe0fede78434b6_images_ROSA_1-5da13794-b537-48be-8870-af9306fb4bf8.png';
const src = process.platform === 'win32' ? '\\\\?\\' + srcLong : srcLong;
const dest = path.join(process.cwd(), 'src', 'lib', 'assets', 'collection-robot-rosa.png');

try {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log('OK:', dest, fs.statSync(dest).size, 'bytes');
} catch (e) {
  console.error('Error:', e.message);
  process.exit(1);
}
