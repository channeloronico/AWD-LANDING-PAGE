const button = document.getElementById('_button');
const notification = document.getElementById('_notification');
const counterSpan = notification.querySelector('.counter');

button.addEventListener('click', () => {
    let counter = parseInt(notification.getAttribute('data-count')) || 0;
    counter++;
    notification.setAttribute('data-count', counter);
    counterSpan.textContent = counter;
    notification.classList.add('notify');
});

notification.addEventListener('animationend', () => {
    notification.classList.remove('notify');
});

notification.addEventListener('click', () => {
    notification.classList.add('clicked');
    setTimeout(() => {
        notification.classList.remove('clicked');
    }, 200);
});
