import type { NextApiRequest, NextApiResponse } from 'next';
import * as sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY ?? 'NONE');

type Data = {
    message: string;
};

type BodyProps = {
    name: string;
    email: string;
    message: string;
    token: string;
};

const verifyRecaptcha = async (token: string) => {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    console.log(secretKey, token);
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    return await fetch(verificationUrl, { method: 'POST' });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        try {
            const { name, email, message, token }: BodyProps = req.body;

            const response = await verifyRecaptcha(token);
            const data = await response.json();

            if (data.success && data.score >= 0.5) {
                const msg = `Nombre: ${name}\r\n Email: ${email}\r\n Mensaje: ${message}`;
                const body = {
                    to: 'alejandro.isla.c@gmail.com',
                    from: 'alejandro.isla.c@gmail.com',
                    subject: `WEBSITE - ${name.toUpperCase()} te ha enviado un mensaje`,
                    text: `Email => ${email}`,
                    html: msg.replace(/\r\n/g, '<br>')
                };

                await sendgrid.send(body);
                res.status(200).json({ message: 'Email enviado correctamente' });
            } else {
                throw new Error('Error en el captcha');
            }
        } catch (err) {
            res.status(400).json({ message: 'Error al enviar el email ' + err });
        }
    }
}
