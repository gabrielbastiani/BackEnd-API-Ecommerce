import { Request, Response } from 'express';
import { DeletePhotoTextoService } from '../../../../services/loja/textoInstitucional/photoTextoInstitucional/DeletePhotoTextoService';
import { RemovePhotoTextoService } from '../../../../services/loja/textoInstitucional/photoTextoInstitucional/RemovePhotoTextoService';
import fs from 'fs';

class DeletePhotoTextoController {
  async handle(req: Request, res: Response) {
    const imageloja_id = req.query.imageloja_id as string;

    const updatePhoto = new DeletePhotoTextoService();
    const deletePhoto = new RemovePhotoTextoService();

    const photoTexto = await deletePhoto.execute({
      imageloja_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + photoTexto.image);

    const deletePhotoTexto = await updatePhoto.execute({
      imageloja_id,
    });

    return res.json([photoTexto, deletePhotoTexto]);

  }
}

export { DeletePhotoTextoController }