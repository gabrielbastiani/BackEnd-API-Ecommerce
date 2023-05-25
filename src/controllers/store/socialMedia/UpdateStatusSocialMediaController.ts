import { Request, Response } from 'express';
import { UpdateStatusSocialMediaService } from '../../../services/store/socialMedia/UpdateStatusSocialMediaService';

class UpdateStatusSocialMediaController {
  async handle(req: Request, res: Response) {
    const socialMedia_id = req.query.socialMedia_id as string;

    const updateMedia = new UpdateStatusSocialMediaService();

    const mediaUpdate = await updateMedia.execute({
      socialMedia_id
    });

    return res.json(mediaUpdate);

  }
}

export { UpdateStatusSocialMediaController }