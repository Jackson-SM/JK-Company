const notification = document.querySelector('.notification-email');
const notificationMessage = document.querySelector('.notification-email .message-email');

notification.addEventListener('click', (event) => {
    event.target.classList.add('close');
})