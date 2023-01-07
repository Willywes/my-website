import React, { ChangeEvent, useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { BiErrorCircle } from 'react-icons/bi';

const defaultFormState = {
    name: '',
    email: '',
    message: ''
};
const Contact = () => {
    const [data, setData] = useState(defaultFormState);
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorFields, setErrorFields] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
        if (success) setSuccess(false);
        if (error) setError(false);
        if (errorFields) setErrorFields(false);
    };

    const handleSubmit = async () => {
        setSending(true);
        try {
            const { name, email, message } = data;

            if (!name || !email || !message) {
                setErrorFields(true);
                setSending(false);
                return;
            }

            await fetch('/api/sengrid', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            })
                .then((res) => {
                    if (res.status === 200) {
                        runSuccess();
                    } else {
                        runError();
                    }
                })
                .finally(() => setSending(false));
        } catch (err) {
            runError();
        }
        setSending(false);
    };
    const runSuccess = () => {
        setData(defaultFormState);
        setSuccess(true);
    };

    const runError = () => {
        setError(true);
    };
    return (
        <>
            <h2>Hablemos</h2>

            {success === true && (
                <div className="alert alert-success">
                    <span className="icon-success">
                        <BsCheck2Circle />
                    </span>{' '}
                    Gracias por contactarte conmigo, te responderé a la brevedad.
                </div>
            )}

            {error === true && (
                <div className="alert alert-danger">
                    <span className="icon-danger">
                        <BiErrorCircle />
                    </span>{' '}
                    Hubo un error al enviar el mensaje, por favor intenta nuevamente.
                </div>
            )}
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Nombre
                </label>
                <input
                    type="text"
                    className={`form-control ${sending ? 'disabled' : ''}`}
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                />
                {errorFields && !data.name && (
                    <small className="text-danger">El campos nombre es requerido</small>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    className={`form-control ${sending ? 'disabled' : ''}`}
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                />
                {errorFields && !data.email && (
                    <small className="text-danger">El campos email es requerido</small>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">
                    Mensaje
                </label>
                <textarea
                    className={`form-control ${sending ? 'disabled' : ''}`}
                    id="message"
                    name="message"
                    rows={4}
                    style={{ resize: 'none' }}
                    value={data.message}
                    onChange={handleInputChange}
                ></textarea>
                {errorFields && !data.message && (
                    <small className="text-danger">El campos mensaje es requerido</small>
                )}
            </div>

            {sending ? (
                <button className="btn btn-form mt-3" type="button" disabled>
                    <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    Enviando...
                </button>
            ) : (
                <button className="btn btn-form mt-3 px-5" type="button" onClick={handleSubmit}>
                    Enviar
                </button>
            )}
        </>
    );
};
export default Contact;
