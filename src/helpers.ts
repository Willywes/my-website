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
