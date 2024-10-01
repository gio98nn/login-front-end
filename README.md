#  Projeto de Tela para testes de Login - Front End

## Propósito do repositorio
Este repositório guarda alguns códigos em HTML, CSS e JavaScript com a intenção de fornecer uma tela de login bem simples que possa ser utilizada para alguns testes locais.

## Como conectar essa tela com o backend

Basta adicionar o endereço em que seu backend estiver rodando no fetch dentro do arquivo script.js, mais especificamente aqui:

`fetch('Endereço da aplicação local exemplo: http://localhost:port/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })`

## Redirecionamento após login

Foi criado um arquivo chamado dashboard.html para servir de redirecionamento de tela após login bem sucedido. Nessa tela tem algumas documentações importantes de algumas coisas utilizadas na construção do projeto.

## Observações

A parte do backend foi desenvolvida usando ASP.NET Core e ela estará situada em um outro repositório.