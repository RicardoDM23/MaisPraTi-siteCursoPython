const form = document.getElementById('inscDialogForm')

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const email = document.getElementById('inscDialogEmail').value;
    const phone = document.getElementById('inscDialogPhone').value;
    let errorMessage = document.getElementById('inscDialogErrorM');

    // Regex para validar o formato do e-mail
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // Regex para validar o formato do telefone (xx)xxxxx-xxxx
    const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;

    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Por favor, insira um e-mail válido.';
    } else if (!phonePattern.test(phone)) {
        errorMessage.textContent = 'Por favor, insira um telefone válido no formato (xx)xxxxx-xxxx.';
    } else {
        errorMessage.textContent = '';
        alert('Inscrição realizada com sucesso!');
        // this.submit();
    }
});

const numPhone = document.getElementById('inscDialogPhone')
numPhone.addEventListener('input', function(event) {
    let input = event.target;
    let value = input.value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 0) {
        formattedValue = '(' + value.substring(0, 2);
    }
    if (value.length > 2) {
        formattedValue += ') ' + value.substring(2, 7);
    }
    if (value.length > 7) {
        formattedValue += '-' + value.substring(7, 11);
    }

    input.value = formattedValue;
});