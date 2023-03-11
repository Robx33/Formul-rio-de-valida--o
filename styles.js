const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const jobSelect = document.querySelector('#job')
const messageTextarea = document.querySelector('#message')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert('Por favor, preencha o seu nome')
        return
    }
    // Verifica se o email está preenchido e se é válido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert('Por favor, preencha um email válido')
        return
    }

    // Verifica se os campos de senha estão preenchidos
    if (!validatePassword(passwordInput.value, 8)) {
        alert('A senha precisa ter no mínimo 8 dígitos')
        return
    }

    // Verifica se a situação de trabalho foi selecionada
    if (jobSelect.value === "") {
        alert('Por favor, selecione a sua situação')
        return
    }

    // Verifica se a mensagem está preenchida
    if (messageTextarea.value === "") {
        alert('Por favor, escreva alguma mensagem')
        return
    }


    // Se todos os campos estiverem preenchidos, envie o form
    form.submit()
})

// Função que valida email
function isEmailValid(email) {
    // Cria um regex para validar o email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/ // Exemplos de caracteres que serão aceitos no regex
    )

    if (emailRegex.test(email)) {
        return true
    }
    return false
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        // Senha válida
        return true
    }  
     // Senha inválida
        return false

} 