import prismaClient from "../../../prisma";

interface LojaRequest {
    institutionalText_id: string;
    position: string;
    slugPosition: string;
}

class UpdatePositionInstitutionalTextService {
    async execute({ institutionalText_id, position }: LojaRequest) {

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
                position: position,
                slugPosition: removerAcentos(position)
            }
        })

        return text;

    }
}

export { UpdatePositionInstitutionalTextService }