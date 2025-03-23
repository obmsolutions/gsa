document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Credenciais definidas diretamente no código
    const correctUsername = 'gsa';
    const correctPassword = 'gsa123';

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        // Redireciona para a página de dados
        window.location.href = 'dados.html';
    } else {
        document.getElementById('error-message').textContent = 'Usuário ou senha incorretos.';
    }
});
