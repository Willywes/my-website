export const calculateDurationInYearsMonths = (startDate: Date, endDate: Date | null) => {
    if (!endDate) {
        endDate = new Date();
    }

    const diff = endDate.getTime() - startDate.getTime();
    const diffInMonths = diff / (1000 * 60 * 60 * 24 * 30);
    const years = Math.floor(diffInMonths / 12);
    const months = Math.floor(diffInMonths % 12);

    let duration = '';
    if (years > 0) {
        duration += `${years} año${years > 1 ? 's' : ''}`;
    }
    if (years > 0 && months > 0) {
        duration += ' y ';
    }
    if (months > 0) {
        duration += `${months} mes${months > 1 ? 'es' : ''}`;
    }

    return duration;
};

export const formatJobDate = (date: Date | null) => {
    if (!date) {
        return 'actualidad';
    }

    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long'
    });
};

export const timestampToDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const validateForm = ({
                                 name,
                                 email,
                                 message
                             }: {
    name: string;
    email: string;
    message: string;
}) => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!name || name.trim() === '') {
        errors.name = 'El nombre es requerido';
    }
    if (!email || email.trim() === '') {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'El email es requerido';
    }
    if (!message || message.trim() === '') {
        errors.message = 'El mensaje es requerido';
    }
    return errors;
};
