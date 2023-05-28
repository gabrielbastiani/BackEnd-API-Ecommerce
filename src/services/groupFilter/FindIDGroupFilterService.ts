import prismaClient from '../../prisma';

interface GroupRequest {
    groupFilter_id: string;
}

class FindIDGroupFilterService {
    async execute({ groupFilter_id }: GroupRequest) {
        const idUnique = await prismaClient.groupFilter.findUnique({
            where: {
                id: groupFilter_id,
            },
            include: {
                filterattributes: true,
                filtercategories: true
            }
        });
        
        return idUnique;
    }
}

export { FindIDGroupFilterService }