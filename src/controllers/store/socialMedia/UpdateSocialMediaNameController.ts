import { Request, Response } from 'express';
import { UpdateSocialMediaNameService } from '../../../services/store/socialMedia/UpdateSocialMediaNameService';

class UpdateSocialMediaNameController {
  async handle(req: Request, res: Response) {
    const socialMedia_id = req.query.socialMedia_id as string;

    const { name } = req.body;

    const updateName = new UpdateSocialMediaNameService();

    const media = await updateName.execute({
      socialMedia_id,
      name
    });

    return res.json(media);

  }
}

export { UpdateSocialMediaNameController }