import prismaClient from '../../prisma';

class FindFirstStoreService {
    async execute() {
        const userStore = await prismaClient.store.findFirst({
            include: {
                admins: true,
                avalietions: true,
                buytogethers: true,
                categories: true,
                contacts: true,
                customers: true,
                deliveryaddresscustomers: true,
                filterattributes: true,
                filtercategories: true,
                groupfilters: true,
                imagestores: true,
                institutionaltexts: true,
                menucategories: true,
                newsletters: true,
                productcategories: true,
                products: true,
                relationattributeproducts: true,
                socialmedias: true,
                tags: true,
                typeattributes: true,
                countersproposals: true,
                coupons: true,
                productsvariations: true,
                stockproductcustomer: true,
                valuesattributes: true
            }
        });

        return userStore;

    }
}

export { FindFirstStoreService }