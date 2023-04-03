import { Request, Response } from 'express';
import { UpdatePhotoTextoService } from '../../../../services/loja/textoInstitucional/photoTextoInstitucional/UpdatePhotoTextoService';
import { RemovePhotoTextoService } from '../../../../services/loja/textoInstitucional/photoTextoInstitucional/RemovePhotoTextoService';
import fs from 'fs';

class UpdatePhotoTextoController {
  async handle(req: Request, res: Response) {
    const imageloja_id = req.query.imageloja_id as string;

    const updatePhoto = new UpdatePhotoTextoService();
    const deletePhoto = new RemovePhotoTextoService();

    const photoText = await deletePhoto.execute({
      imageloja_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + photoText.image);

    if (!req.file) {
      throw new Error('error upload file')
    } else {
      const { originalname, filename: image } = req.file;

      const updatePhotoTexto = await updatePhoto.execute({
        imageloja_id,
        image,
      });

      return res.json([photoText, updatePhotoTexto]);

    }

  }
}

export { UpdatePhotoTextoController }