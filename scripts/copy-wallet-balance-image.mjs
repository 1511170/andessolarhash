/**
 * Copia la imagen del mockup wallet (Bitcoin/POL) desde Cursor al proyecto.
 * Ejecutar: node scripts/copy-wallet-balance-image.mjs
 */
import fs from 'fs';
import path from 'path';

const srcLong = 'C:\\Users\\camilo\\.cursor\\projects\\c-Users-camilo-DEVS-andessolarhash\\assets\\c__Users_camilo_AppData_Roaming_Cursor_User_workspaceStorage_c34666e23ba6dc5775fe0fede78434b6_images_b98cec83-41b0-4157-84cb-e0e10bbd6b00-Photoroom_2-cf8cb59d-2ef9-4a82-932f-59d512c26d17.png';
const src = process.platform === 'win32' ? '\\\\?\\' + srcLong : srcLong;
const dest = path.join(process.cwd(), 'src', 'lib', 'assets', 'mockup-wallet-balance.png');

try {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log('OK:', dest, fs.statSync(dest).size, 'bytes');
} catch (e) {
  console.error('Error:', e.message);
  process.exit(1);
}
