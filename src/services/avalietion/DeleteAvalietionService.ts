import prismaClient from "../../prisma";

interface AvalientionRequest {
    avalietion_id: string;
}

class DeleteAvalietionService {
    async execute({ avalietion_id }: AvalientionRequest) {
        const avalietion = await prismaClient.avalietion.delete({
            where: {
                id: avalietion_id
            }
        })

        return avalietion;
    }

}

export { DeleteAvalietionService }