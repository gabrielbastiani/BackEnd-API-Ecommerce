import prismaClient from "../../prisma";

class NotificationsConfigsService {
    async execute() {

        const store = await prismaClient.store.findMany();
        const socialMedia = await prismaClient.socialMedia.findMany();
        const institutionalText = await prismaClient.institutionalText.findMany();
        const imageStore = await prismaClient.imageStore.findMany();
        const category = await prismaClient.category.findMany();
        const menuCategory = await prismaClient.menuCategory.findMany();
        const configAbandonedCart = await prismaClient.configAbandonedCart.findMany();
        const templateAbandonedCartEmail = await prismaClient.templateAbandonedCartEmail.findMany();
        const templateOrderEmail = await prismaClient.templateOrderEmail.findMany();
        const templateFreteEmail = await prismaClient.templateFreteEmail.findMany();

        const data = {
            store,
            socialMedia,
            institutionalText,
            imageStore,
            category,
            menuCategory,
            configAbandonedCart,
            templateAbandonedCartEmail,
            templateOrderEmail,
            templateFreteEmail
        }

        return data;

    }
}

export { NotificationsConfigsService }