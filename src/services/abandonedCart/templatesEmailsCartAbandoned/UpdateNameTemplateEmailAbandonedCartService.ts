import prismaClient from "../../../prisma";

interface TemplateRequest {
    templateAbandonedCartEmail_id: string;
    name_file_email: string;
}

class UpdateNameTemplateEmailAbandonedCartService {
    async execute({
        templateAbandonedCartEmail_id,
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

        const updateName = await prismaClient.templateAbandonedCartEmail.update({
            where: {
                id: templateAbandonedCartEmail_id
            },
            data: {
                name_file_email: name_file_email,
                slug_name_file_email: removerAcentos(name_file_email)
            }
        })

        return updateName;

    }
}

export { UpdateNameTemplateEmailAbandonedCartService }