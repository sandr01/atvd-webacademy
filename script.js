document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
            
    // Valores esperados
    var nomeEsperado = "admin";
    var emailEsperado = "admin@admin.com";
    var senhaEsperada = "admin";
            
    // Valores do formulário
    var nomeDigitado = document.getElementById("nome").value;
    var emailDigitado = document.getElementById("email").value;
    var senhaDigitada = document.getElementById("senha").value;
            
    // Verifica se os valores digitados correspondem aos esperados
    if (nomeDigitado === nomeEsperado && emailDigitado === emailEsperado && senhaDigitada === senhaEsperada) {
        // Redireciona para a página home
        window.location.href = "igor.html";
    } else {
        // Se os valores não coincidirem, exibe uma mensagem de erro
        alert("Nome, e-mail ou senha incorretos. Por favor, tente novamente.");
    }
});
