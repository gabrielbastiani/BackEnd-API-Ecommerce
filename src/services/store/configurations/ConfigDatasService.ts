import prismaClient from "../../../prisma"; 

class ConfigDatasService {
    async execute() {
        const configs = await prismaClient.configStore.findMany();
        return configs;
    }
}

export { ConfigDatasService }