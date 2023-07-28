import prismaClient from "../../prisma";

interface StoreRequest {
  store_id: string;
}

class FindUniqueStoreService {
  async execute({ store_id }: StoreRequest) {
    const findUnque = await prismaClient.store.findUnique({
      where: {
        id: store_id
      },
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
    })

    return findUnque;

  }
}

export { FindUniqueStoreService }