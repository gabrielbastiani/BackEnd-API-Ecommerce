import prismaClient from "../../../prisma";

interface SocialRequest {
  socialMedia_id: string;
}

class FindUniqueSocialMediaService {
  async execute({ socialMedia_id }: SocialRequest) {
    const social = await prismaClient.socialMedia.findUnique({
      where: {
        id: socialMedia_id
      }
    })

    return social;

  }
}

export { FindUniqueSocialMediaService }