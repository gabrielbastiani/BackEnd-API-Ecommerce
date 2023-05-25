import { Request, Response } from 'express';
import { DeleteSocialMediaService } from '../../../services/store/socialMedia/DeleteSocialMediaService';
import { FindUniqueSocialMediaService } from '../../../services/store/socialMedia/FindUniqueSocialMediaService';
import fs from 'fs';

class DeleteSocialMediaController {
  async handle(req: Request, res: Response) {
    const socialMedia_id = req.query.socialMedia_id as string;

    const deleteMedia = new DeleteSocialMediaService();
    const findSocial = new FindUniqueSocialMediaService();

    const imageMedia = await findSocial.execute({
      socialMedia_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageMedia.image);

    const deleteImageMedia = await deleteMedia.execute({
      socialMedia_id,
    });

    return res.json([imageMedia, deleteImageMedia]);

  }
}

export { DeleteSocialMediaController }