const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        errorPrivacy = 'Согласитесь с условиями',
        loadMessage = '<img src="/images/preloader.gif" alt="loading" style="height: 50px;" />';

    const forms = document.querySelectorAll('form'),
        statusMessage = document.createElement('div'),
        popupThank = document.querySelector('.popup-thank');

    statusMessage.style.color = '#f99b1c';
    statusMessage.style.fontWeight = 'bold';

    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();

            form.appendChild(statusMessage);
            statusMessage.innerHTML = loadMessage;

            if (form.querySelector('[name="privacy"]') && form.querySelector('[name="privacy"]').checked) {
                const formData = new FormData(form);
                const body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                });
                postData(body)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('Status network not 200');
                        }
                        popupThank.classList.toggle('visible');
                        form.reset();
                    })
                    .catch(error => {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });
            } else {
                statusMessage.innerHTML = errorPrivacy;
            }
        });
    });
};

export default sendForm;