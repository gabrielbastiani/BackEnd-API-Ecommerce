import { Request, Response } from 'express';
import { UpdateLinkSocialMediaService } from '../../../services/store/socialMedia/UpdateLinkSocialMediaService';

class UpdateLinkSocialMediaController {
  async handle(req: Request, res: Response) {
    const socialMedia_id = req.query.socialMedia_id as string;

    const { link } = req.body;

    const updateLink = new UpdateLinkSocialMediaService();

    const store = await updateLink.execute({
      socialMedia_id,
      link
    });

    return res.json(store);

  }
}

export { UpdateLinkSocialMediaController }