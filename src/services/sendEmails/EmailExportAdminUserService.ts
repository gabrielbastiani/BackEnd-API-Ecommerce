import nodemailer from "nodemailer";
require('dotenv/config');


class EmailExportAdminUserService {
    async execute() {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST_SMTP,
            port: 465,
            auth: {
                user: process.env.USER_SMTP,
                pass: process.env.PASS_SMTP
            }
        })

        await transporter.sendMail({
            from: 'Loja Virtual - Builder Seu Negocio Online <contato@builderseunegocioonline.com.br>',
            to: 'gabriel.bastiani@hotmail.com.br',
            subject: "Lista de usúarios da Loja Virtual",
            html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h2>Lista de Usúarios da Loja Virtual</h2>
                  </div>
                  
                  <article>
                      <p>Olá!</p>
                      <p>Segue em anexo o arquivo com a listagem de usúarios cadastrados na Loja Virtual</p>
                  </article>
                  
                  <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h5>Loja Virtual Builder Seu Negocio Online</h5>
                  </div>`,
            attachments: [{
                filename: 'ListagemUsuariosAdmins.xlsx',
                path: 'ListagemUsuariosAdmins.xlsx'
            }]
        });

        return {
            message: "Verifique seu E-mail",
        };

    }
}

export { EmailExportAdminUserService }