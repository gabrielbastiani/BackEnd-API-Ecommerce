import prismaClient from "../../prisma";

interface AvalientionRequest {
    avalietion_id: string;
    status: string;
}

class UpdateStatusAvalietionService {
    async execute({ avalietion_id, status }: AvalientionRequest) {
        const avalietion = await prismaClient.avalietion.update({
            where: {
                id: avalietion_id
            },
            data: {
                status: status
            }
        })

        return avalietion;

    }
}

export { UpdateStatusAvalietionService }