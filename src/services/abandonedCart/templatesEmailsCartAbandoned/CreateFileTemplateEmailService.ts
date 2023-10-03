import prismaClient from "../../../prisma";
import path from "path";

interface TemplateRequest {
    template_cart_email: any;
    name_file_email: string;
}

class CreateFileTemplateEmailService {
    async execute({ template_cart_email, name_file_email }: TemplateRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const store = await prismaClient.store.findFirst();

        await prismaClient.templateAbandonedCartEmail.create({
            data: {
                name_file_email: name_file_email,
                slug_name_file_email: removerAcentos(name_file_email),
                store_id: store.id
            }
        });

        const templatesFind = await prismaClient.templateAbandonedCartEmail.findFirst({
            orderBy: {
                created_at: 'desc'
            }
        });

        const fs = require('fs');

        const requiredPath = path.join(__dirname, "./template_emails_abandoned_cart");

        const nameTemplate = templatesFind.slug_name_file_email;

        const templates = fs.writeFile(`${requiredPath}/${nameTemplate}.ejs`, template_cart_email, 'utf8', (err: any) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Arquivo gravado com sucesso.');
        });

        return templates;

    }
}

export { CreateFileTemplateEmailService }