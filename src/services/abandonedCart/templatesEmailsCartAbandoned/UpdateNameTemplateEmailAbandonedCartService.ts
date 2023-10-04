import path from "path";
import prismaClient from "../../../prisma";

interface TemplateRequest {
    slug_name_file_email: string;
    name_file_email: string;
}

class UpdateNameTemplateEmailAbandonedCartService {
    async execute({
        slug_name_file_email,
        name_file_email
    }: TemplateRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const updateName = await prismaClient.templateAbandonedCartEmail.updateMany({
            where: {
                slug_name_file_email: slug_name_file_email
            },
            data: {
                name_file_email: name_file_email,
                slug_name_file_email: removerAcentos(name_file_email)
            }
        });

        const fs = require('fs');
        const nameInPaste = path.join(__dirname, "../../../../src/services/abandonedCart/templatesEmailsCartAbandoned/template_emails_abandoned_cart");

        const nomeAtual = `${nameInPaste}/${slug_name_file_email}.ejs`;
        const novoNome = `${nameInPaste}/${removerAcentos(name_file_email)}.ejs`;

        fs.rename(nomeAtual, novoNome, (err: any) => {
            if (err) {
                console.error('Erro ao renomear o arquivo:', err);
            } else {
                console.log('Arquivo renomeado com sucesso!');
            }
        });

        return updateName;

    }
}

export { UpdateNameTemplateEmailAbandonedCartService }