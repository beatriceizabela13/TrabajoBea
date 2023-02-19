const form = document.querySelector('#formulario');
const nombre = document.querySelector('#Nombre');
const email = document.querySelector('#Email');
const clave = document.querySelector('#pass');
const passconfirma = document.querySelector('#passconfirma');

form.addEventListener ('submit', (e)=> {
    e.preventDefault();
    checkInputs();
})

const checkInputs = () => {
    const nombreValue = Nombre.value.trim();
    const emailValue = Email.value.trim();
    const passValue = pass.value.trim();
    const passConfirmaValue = passConfirma.trim();
}

if (nombreValue === '') {
    setErrorFor(Nombre, 'Rellene este campo');
}
else {
    setSuccessFor(Nombre);
}

if (emailValue === '') {
    setErrorFor(email, 'Rellene este campo');
}
else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email inválido');
}

if (passValue === '') {
    setErrorFor(pass, 'Rellene este campo');
}
else {
    setSuccessFor(pass);
}

if (passConfirmaValue === '') {
    setErrorFor(passConfirma, 'Rellene este campo');
} else if (passValue !== passConfirmaValue) {
    setErrorFor(passConfirma, 'Las contraseñas o coinciden');
}
else {
    setSuccessFor(pass);
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.ParentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(email);
}
function verificarPassword() {
    var inputName = document.querySelector("#pass").value;
    if (inputName.length >= 8) {
        console.log
    }
    else {
        alert("Debes escribir más de 8 caracteres");
    }
}
