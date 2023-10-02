import prismaClient from "../../../prisma";
import path from "path";

interface TemplateRequest {
    configAbandonedCart_id: string;
    template_cart_email: string;
    name_file_email: string;
}

class CreateFileTemplateEmailService {
    async execute({ configAbandonedCart_id, template_cart_email, name_file_email }: TemplateRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const store = await prismaClient.store.findFirst();

        const templates = await prismaClient.templateAbandonedCartEmail.create({
            data: {
                configAbandonedCart_id: configAbandonedCart_id,
                template_cart_email: template_cart_email,
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

        const nameTemplate = templatesFind.slug_name_file_email;
        const conteudo = templatesFind.template_cart_email;

        const requiredPath = path.join(__dirname, "../../../services/abandonedCart/configAbandonedCart/template_emails");

        fs.writeFile(`${requiredPath}/${nameTemplate}.ejs`, conteudo, 'utf8', (err: any) => {
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