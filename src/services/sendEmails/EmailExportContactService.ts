import nodemailer from "nodemailer";
import prismaClient from "../../prisma";
require('dotenv/config');

class EmailExportContactService {
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
            subject: "Lista de contacts do Loja",
            html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h2>Lista de Contatos do Loja</h2>
                  </div>
                  
                  <article>
                      <p>Olá!</p>
                      <p>Segue em anexo o arquivo com a listagem de contacts cadastrados no Loja?</p>
                  </article>
                  
                  <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h5>Loja ${store.name}</h5>
                  </div>`,
            attachments: [{
                filename: 'ListagemDosContatos.xlsx',
                path: 'ListagemDosContatos.xlsx'
            }]
        });

        return {
            message: "Verifique seu E-mail",
        };

    }
}

export { EmailExportContactService }