# Enviando emails usando NodeJS
Aula mostrando como construir app em NodeJS para envio de emails.

## Usados na aula
- NodeJS
- módulo Express
- módulo nodemailer
- site para testes de envio e recebimento MailTrap [https://mailtrap.io]

## Instruções
- clonar esse repositório
- acessar o repositório criado
- ```npm install``` para instalar as dependências
- ```nodemon start``` para subir o servidor
- o site fica disponível em [http://localhost:3000]

### anotações durante a aula
Secure SSL/TLS Settings (Recomendado)
Nome de usuário: 	seuuser@seudominio.com
Senha: 	Use a senha da conta de email.
Servidor de entrada: 	mail.seudominio.com

    IMAP Port: porta POP3 Port: porta 

Servidor de saída: 	mail.seudominio.com

    SMTP Port: porta 

IMAP, POP3 e SMTP require authentication.
Configurações não SSL (NÃO recomendado)
Nome de usuário: 	seuuser@seudominio.com
Senha: 	Use a senha da conta de email.
Servidor de entrada: 	mail.seudominio.com

    IMAP Port: porta POP3 Port: porta 

Servidor de saída: 	mail.seudominio.com

    SMTP Port: porta 

IMAP, POP3 e SMTP require authentication.

MAIL MARKETING
https://befree.io
tem templates de email marketing já prontos.
azuis sao free. os roxos sao pagos via assinatura.
porque deveriamos usar: porque codar html no email nao é boa pratica, nem todo programa de email lê devidamente. emails são codados em tabelas.

IMAGENS: precisa ser imagens que já estao na internet.