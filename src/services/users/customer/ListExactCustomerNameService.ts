import prismaClient from "../../../prisma";

interface AdminRequest {
    slug: string;
}

class ListExactCustomerNameService {
    async execute({ slug }: AdminRequest) {
        const exactUser = await prismaClient.customer.findFirst({
            where: {
                slug: slug
            }
        })
        return exactUser;
    }
}

export { ListExactCustomerNameService }