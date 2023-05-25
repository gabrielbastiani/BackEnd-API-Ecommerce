import prismaClient from "../../prisma";

interface StoreRequest {
  store_id: string;
  logo: string;
}

class UpdateLogoStoreService {
  async execute({ store_id, logo }: StoreRequest) {
    const updateLogo = await prismaClient.store.update({
      where: {
        id: store_id
      },
      data: {
        logo: logo,
      }
    })

    return updateLogo;

  }
}

export { UpdateLogoStoreService }