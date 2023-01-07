import type { NextApiRequest, NextApiResponse } from 'next';
import * as sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY ?? 'NONE');

type Data = {
    message: string;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        const { name, email, message }: { name: string; email: string; message: string } = req.body;
        const msg = `Nombre: ${name}\r\n Email: ${email}\r\n Mensaje: ${message}`;
        const data = {
            to: 'alejandro.isla.c@gmail.com',
            from: 'hola@devlabs.cl',
            subject: `${name.toUpperCase()} te ha enviado un mensaje`,
            text: `Email => ${email}`,
            html: msg.replace(/\r\n/g, '<br>')
        };
        try {
            await sendgrid.send(data);
            res.status(200).json({ message: 'Email enviado correctamente' });
        } catch (err) {
            res.status(400).json({ message: 'Error al enviar el email ' + err });
        }
    }
}
