import { StatusBuyTogether } from "@prisma/client";
import prismaClient from "../../prisma";

interface BuyRequest {
    parentId: string;
}

class FindBuyTogetherIDService {
    async execute({ parentId }: BuyRequest) {
        const allItensBuy = await prismaClient.buyTogether.findMany({
            where: {
                parentId: parentId,
                status: StatusBuyTogether.Disponivel
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: {
                    include: {
                        photoproducts: true,
                        relationattributeproducts: {
                            include: {
                                typeAttribute: true,
                                valueAttribute: true
                            }
                        }
                    }
                },
                products: true
            }
        });

        return allItensBuy;

    }
}

export { FindBuyTogetherIDService }