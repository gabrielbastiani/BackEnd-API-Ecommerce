import { Request, Response } from 'express';
import { DeleteRedeSocialService } from '../../../services/store/socialMedia/DeleteRedeSocialService';
import { RemoveImageRedeSocialService } from '../../../services/store/socialMedia/RemoveImageRedeSocialService';
import fs from 'fs';

class DeleteRedeSocialController {
  async handle(req: Request, res: Response) {
    const redesocial_id = req.query.redesocial_id as string;

    const updatePhoto = new DeleteRedeSocialService();
    const deletePhoto = new RemoveImageRedeSocialService();

    const imageRedes = await deletePhoto.execute({
      redesocial_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageRedes.imageRede);

    const updateBanner = await updatePhoto.execute({
      redesocial_id,
    });

    return res.json([imageRedes, updateBanner]);

  }
}

export { DeleteRedeSocialController }