import prismaClient from '../../prisma';

interface VariationRequest {
    variation_id: string;
    name: string;
    slug: string;
}

class UpdateNameVariationService {
    async execute({ variation_id, name }: VariationRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const variation = await prismaClient.variation.update({
            where: {
                id: variation_id
            },
            data: {
                name: name,
                slug: removerAcentos(name)
            }
        })
        return variation;
    }
}

export { UpdateNameVariationService }