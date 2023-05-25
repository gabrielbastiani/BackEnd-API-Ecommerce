import { Request, Response } from 'express';
import { UpdatePositionSocialMediaService } from '../../../services/store/socialMedia/UpdatePositionSocialMediaService';

class UpdatePositionSocialMediaController {
  async handle(req: Request, res: Response) {
    const socialMedia_id = req.query.socialMedia_id as string;

    const { position, slugPosition } = req.body;

    const updatePosition = new UpdatePositionSocialMediaService();

    const positionMedia = await updatePosition.execute({
      socialMedia_id,
      position,
      slugPosition
    });

    return res.json(positionMedia);

  }
}

export { UpdatePositionSocialMediaController }