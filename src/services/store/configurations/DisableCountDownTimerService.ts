import prismaClient from "../../../prisma";

class DisableCountDownTimerService {
    async execute() {

        const store = await prismaClient.store.findFirst();
        const configDate = await prismaClient.configStore.findFirst();

        await prismaClient.configStore.update({
            where: {
                id: configDate.id
            },
            data: {
                count_down_timer: "Indisponivel"
            }
        });

        await prismaClient.notificationAdmin.create({
            data: {
                message: `Contador regressivo se encontra <strong>Indisponivel</strong> na loja.`,
                store_id: store.id
            }
        });

        return;

    }
}

export { DisableCountDownTimerService }