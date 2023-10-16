import prismaClient from "../../../prisma";
import path from "path";

interface TemplateRequest {
    status_order: string;
    subject: string;
    template_cart_email: any;
    name_file_email: string;
    active: string;
}

class CreateFileTemplateEmailOrderStatusService {
    async execute({ template_cart_email, name_file_email, subject, status_order, active }: TemplateRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        function removerSinais(texto: string) {
            var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
            var textoSemSinais = texto.replace(regex, '');
            return textoSemSinais;
        }

        const noSignals = removerSinais(name_file_email);

        const store = await prismaClient.store.findFirst();

        await prismaClient.templateOrderEmail.create({
            data: {
                status_order: status_order,
                subject: subject,
                name_file_email: noSignals,
                slug_name_file_email: removerAcentos(noSignals),
                active: active,
                store_id: store.id
            }
        });

        const templatesFind = await prismaClient.templateOrderEmail.findFirst({
            orderBy: {
                created_at: 'desc'
            }
        });

        const fs = require('fs');

        const requiredPath = path.join(__dirname, "./template_emails_status_order");
        const nameTemplate = templatesFind.slug_name_file_email;

        const pastAndFile = `${requiredPath}/${nameTemplate}.ejs`;
        const template = template_cart_email;

        const templates = fs.writeFile(pastAndFile, template, 'utf8', (err: any) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Arquivo gravado com sucesso.');
        });

        return templates;

    }
}

export { CreateFileTemplateEmailOrderStatusService }