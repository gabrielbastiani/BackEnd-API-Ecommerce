import prismaClient from "../../../prisma";

interface ValueRequest {
    valueAttribute_id: string;
    value: string;
    slug: string;
}

class UpdateValueAttributeService {
    async execute({
        valueAttribute_id,
        value,
    }: ValueRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const updateAttribute = await prismaClient.valueAttribute.update({
            where: {
                id: valueAttribute_id
            },
            data: {
                value: value,
                slug: removerAcentos(value)
            }
        })

        return updateAttribute;

    }
}

export { UpdateValueAttributeService }