import React, { ChangeEvent, useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [sending, setSending] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        setSending(true);

        const { name, email, message } = data;

        const res = await fetch('/api/sengrid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        const json = await res.json();

        console.log(json);

        // if (json.error) {
        //
        // } else {
        //
        // }

        setSending(false);
    };

    return (
        <>
            <h2>Hablemos</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Nombre
                </label>
                <input
                    type="text"
                    className={`form-control ${sending ? 'disabled' : ''}`}
                    id="name"
                    name="name"
                    onChange={handleInputChange}
                />
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
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">
                    Mensaje
                </label>
                <textarea
                    className={`form-control ${sending ? 'disabled' : ''}`}
                    id="message"
                    name="message"
                    rows={3}
                    onChange={handleInputChange}
                ></textarea>
            </div>
            {sending ? (
                <button className="btn btn-primary" type="button" disabled>
                    <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    Enviando...
                </button>
            ) : (
                <button className="btn btn-primary" type="button" onClick={handleSubmit}>
                    Enviar
                </button>
            )}
        </>
    );
};

export default Contact;
