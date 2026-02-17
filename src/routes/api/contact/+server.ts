import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.formData();
  const name = body.get('name');
  const email = body.get('email');
  const message = body.get('message');
  // TODO: enviar email, guardar en BD o integrar con CRM
  console.info('Contact form:', { name, email, message });
  throw redirect(303, '/contacto?sent=1');
};
