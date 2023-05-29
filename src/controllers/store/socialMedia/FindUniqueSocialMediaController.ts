import { Request, Response } from 'express';
import { FindUniqueSocialMediaService } from '../../../services/store/socialMedia/FindUniqueSocialMediaService';

class FindUniqueSocialMediaController {
  async handle(req: Request, res: Response) {
    const socialMedia_id = req.query.socialMedia_id as string;

    const social = new FindUniqueSocialMediaService();

    const media = await social.execute({
      socialMedia_id
    });

    return res.json(media);

  }
}

export { FindUniqueSocialMediaController }