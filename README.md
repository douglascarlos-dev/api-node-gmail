![Logo API](https://github.com/douglascsoliveira/api-node-gmail/logo01.png)

# API para envio de e-mail usando NodeJs e Gmail

Código usado no formulário de contato do meu site [www.douglascarlos.dev](https://www.douglascarlos.dev)

## Recursos usados no desenvolvimento:

- NodeJs;
- Express.js;
- Nodemailer;
- Postman (Para testar a API);

## Testando a API no Postman:

Caso queira testar a API no Postman, basta realizar os passos a seguir.

  Request URL             |  Tipo de requisição   |   Parâmetros do Body   | 
------------------------- | --------------------- | ---------------------- | 
http://localhost:3000     |       POST            | raw/JSON                    | 

```json
{
  "user": [
    {
      "name": "SEU NOME",
      "email": "SEU@EMAIL.COM",
      "message": "SUA MENSAGEM"
    }
  ]
}
```

## Instalação:

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pre-requisitos:

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

Node.Js: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)

### Obtendo uma cópia:

git clone https://github.com/douglascsoliveira/api-node-gmail

### Configuração:

cd api-node-gmail
npm install

### Execução:

node app.js