import nodemailer from "nodemailer";
import prismaClient from "../../prisma";
require('dotenv/config');


class EmailExportCustomerUserService {
    async execute() {

        const store = await prismaClient.store.findFirst();
        
        const transporter = nodemailer.createTransport({
            host: process.env.HOST_SMTP,
            port: 465,
            auth: {
                user: process.env.USER_SMTP,
                pass: process.env.PASS_SMTP
            }
        })

        await transporter.sendMail({
            from: `Loja Virtual - ${store.name} <${store.email}>`,
            to: `${store.email}`,
            subject: "Lista de usúarios da Loja Virtual",
            html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h2>Lista de Usúarios da Loja Virtual</h2>
                  </div>
                  
                  <article>
                      <p>Olá!</p>
                      <p>Segue em anexo o arquivo com a listagem de usúarios cadastrados na Loja Virtual</p>
                  </article>
                  
                  <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h5>Loja Virtual ${store.name}</h5>
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

export { EmailExportCustomerUserService }