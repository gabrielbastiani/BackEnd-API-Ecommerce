import prismaClient from "../../../prisma";

interface StoreRequest {
    institutionalText_id: string;
}

class DeleteInstitutionalTextService {
    async execute({ institutionalText_id }: StoreRequest) {

        const store = await prismaClient.store.findFirst();

        const institucionalText = await prismaClient.institutionalText.findUnique({
            where: {
                id: institutionalText_id
            }
        });

        await prismaClient.notificationAdmin.create({
            data: {
                message: `Texto institucional <strong>${institucionalText.title}</strong> foi deletado com sucesso da loja.`,
                link: `http://localhost:3000/textosInstitucionais`,
                store_id: store.id
            }
        });

        const text = await prismaClient.institutionalText.delete({
            where: {
                id: institutionalText_id,
            }
        });

        return text;

    }
}

export { DeleteInstitutionalTextService }