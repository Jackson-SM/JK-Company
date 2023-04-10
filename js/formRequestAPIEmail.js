const form = document.querySelector('.form-contact');

async function handleSubmit(event){
  event.preventDefault();
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': "application/json"
    }
  }).then(response => {
    if(response.ok){
      notification.classList.remove('close');
      notificationMessage.textContent = "Email Enviado Com sucesso!"
    } else {
      notificationMessage.textContent = "Ops! Algo deu errado no envio de email."
    }
  })
}

form.addEventListener('submit', handleSubmit)