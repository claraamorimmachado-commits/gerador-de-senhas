const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length-slider");
const lengthVal = document.getElementById("length-val");

// Atualiza o número exibido na tela ao mexer no slider
function updateSliderValue() {
    lengthVal.innerText = lengthSlider.value;
}

// Função principal para gerar a senha aleatória
function generatePassword() {
    const length = lengthSlider.value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    passwordInput.value = password;
}

// Função para copiar a senha para a área de transferência
function copyPassword() {
    if (!passwordInput.value) {
        alert("Gere uma senha primeiro!");
        return;
    }

    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999); // Para dispositivos móveis

    navigator.clipboard.writeText(passwordInput.value)
        .then(() => {
            const copyBtn = document.getElementById("copy-btn");
            copyBtn.innerText = "Copiado!";
            copyBtn.style.backgroundColor = "#00f2a1";
            copyBtn.style.color = "#051d3b";

            // Reseta o botão após 2 segundos
            setTimeout(() => {
                copyBtn.innerText = "Copiar";
                copyBtn.style.backgroundColor = "#2b4c7e";
                copyBtn.style.color = "white";
            }, 2000);
        })
        .catch(err => {
            console.error("Erro ao copiar: ", err);
        });
}

// Gera uma senha automaticamente quando a página carregar
window.onload = generatePassword;
