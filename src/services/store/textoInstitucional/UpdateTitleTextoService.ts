import prismaClient from "../../../prisma";

interface LojaRequest {
    textoinstitucional_id: any;
    title: string;
}

class UpdateTitleTextoService {
    async execute({ textoinstitucional_id, title }: LojaRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const store = await prismaClient.textoInstitucional.update({
            where: {
                id: String(textoinstitucional_id),
            },
            data: {
                title: title,
                slug: removerAcentos(title)
            }
        })

        return store;

    }
}

export { UpdateTitleTextoService }