const enviar = document.getElementById('contactForm')

enviar.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    // Regex para validar o formato do e-mail
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Por favor, insira um e-mail válido.';
    } else {
        errorMessage.textContent = '';
        alert('Formulário enviado com sucesso!');
        // this.submit();
    }
});