// Obtener elementos del DOM
const passwordField = document.getElementById('password');
const copyButton = document.getElementById('copy');
const generateButton = document.getElementById('generate');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('length-value');
const strengthLevel = document.getElementById('strength-level');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const formulario =document.getElementById('password-form');
formulario.addEventListener('submit',function(el) {
    el.preventDefault() 
}
);

// Función para generar contraseña
function generatePassword() {
    const length = lengthSlider.value;
    const useUppercase = uppercaseCheckbox.checked;
    const useLowercase = lowercaseCheckbox.checked;
    const useNumbers = numbersCheckbox.checked;
    const useSymbols = symbolsCheckbox.checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let availableChars = '';
    if (useUppercase) availableChars += uppercaseChars;
    if (useLowercase) availableChars += lowercaseChars;
    if (useNumbers) availableChars += numberChars;
    if (useSymbols) availableChars += symbolChars;

    if (availableChars === '') {
        alert("Por favor selecciona al menos una opción.");
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    passwordField.value = password;

    // Establecer nivel de fuerza
    updateStrengthLevel(password);
}

// Función para actualizar el nivel de fuerza de la contraseña
function updateStrengthLevel(password) {
    if (password.length < 10) {
        strengthLevel.textContent = "Nivel: Bajo";
    } else if (password.length < 15) {
        strengthLevel.textContent = "Nivel: Medio";
    } else {
        strengthLevel.textContent = "Nivel: Alto";
    }
}

// Función para copiar la contraseña al portapapeles
function copyPassword() {
    passwordField.select();
    document.execCommand('copy');
}

// Event listeners
generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);

// Actualizar el valor del rango cuando se cambia
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

 