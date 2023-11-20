import prismaClient from "../../../prisma";

interface ConfigsRequest {
  number_whatsapp: string,
  code_google_analytics: string,
  code_live_chat_tawkTo: string
}

class ConfigsExtraService {
  async execute({
    number_whatsapp,
    code_google_analytics,
    code_live_chat_tawkTo
  }: ConfigsRequest) {

    const config = await prismaClient.configStore.findFirst();

    await prismaClient.configStore.update({
      where: {
        id: config.id
      },
      data: {
        number_whatsapp: number_whatsapp,
        code_google_analytics: code_google_analytics,
        code_live_chat_tawkTo: code_live_chat_tawkTo
      }
    });
  }
}

export { ConfigsExtraService }