const validation = () => {
    const inputItems = document.querySelectorAll('input[name="name"]');
    inputItems.forEach(input => {
        input.addEventListener('input', event => {
            const target = event.target;
            target.value = target.value.replace(/[^а-яё\s]+/gi, '');
        });
    });
};

export default validation;