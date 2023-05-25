import prismaClient from "../../../prisma";

interface TextRequest {
    institutionalText_id: string;
    title: string;
}

class UpdateTitleInstitutionalTextService {
    async execute({ institutionalText_id, title }: TextRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const text = await prismaClient.institutionalText.update({
            where: {
                id: institutionalText_id,
            },
            data: {
                title: title,
                slug: removerAcentos(title)
            }
        })

        return text;

    }
}

export { UpdateTitleInstitutionalTextService }