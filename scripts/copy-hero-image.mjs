/**
 * Copia la imagen de los robots (con fondo transparente) desde la ruta de Cursor al proyecto.
 * Ejecutar desde la raíz del proyecto: node scripts/copy-hero-image.mjs
 */
import fs from 'fs';
import path from 'path';

// Ruta larga de Windows: usar prefijo \\?\ para evitar límite de 260 caracteres
const srcLong = 'C:\\Users\\camilo\\.cursor\\projects\\c-Users-camilo-DEVS-andessolarhash\\assets\\c__Users_camilo_AppData_Roaming_Cursor_User_workspaceStorage_c34666e23ba6dc5775fe0fede78434b6_images_GRUPOCORRIENDO_1-33cca219-139d-4e32-a378-3c4bbf3d1b8e.png';
const src = process.platform === 'win32' ? '\\\\?\\' + srcLong : srcLong;
const dest = path.join(process.cwd(), 'src', 'lib', 'assets', 'hero-robots-nft.png');

try {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log('OK:', dest);
  console.log('Tamaño:', fs.statSync(dest).size, 'bytes');
} catch (e) {
  console.error('Error:', e.message);
  process.exit(1);
}
