document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter os valores dos campos
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Verificar se os campos estão vazios
    if (!username || !password) {
        errorMessage.textContent = 'Usuário e senha são obrigatórios.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';

        // Fazer requisição ao backend usando fetch
        fetch('http://localhost:PORTA/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao fazer login');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                console.log('Login bem-sucedido!');
                // Redirecionar para outra página
                window.location.href = "dashboard.html"; // Página para onde deseja redirecionar
            } else {
                errorMessage.textContent = data.message;
                errorMessage.style.display = 'block';
            }
        })
        .catch(error => {
            errorMessage.textContent = 'Falha na requisição: ' + error.message;
            errorMessage.style.display = 'block';
        });
        
    }
});
