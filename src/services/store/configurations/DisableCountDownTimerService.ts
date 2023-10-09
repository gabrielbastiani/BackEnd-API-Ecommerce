import prismaClient from "../../../prisma";

class DisableCountDownTimerService {
    async execute() {

        const configDate = await prismaClient.configStore.findFirst();

        await prismaClient.configStore.update({
            where: {
                id: configDate.id
            },
            data: {
                count_down_timer: "Indisponivel"
            }
        });

        return;

    }
}

export { DisableCountDownTimerService }