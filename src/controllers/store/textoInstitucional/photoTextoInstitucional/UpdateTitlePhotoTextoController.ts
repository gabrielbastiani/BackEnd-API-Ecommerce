import { Request, Response } from 'express';
import { UpdateTitlePhotoTextoService } from '../../../../services/store/textoInstitucional/photoTextoInstitucional/UpdateTitlePhotoTextoService';

class UpdateTitlePhotoTextoController {
  async handle(req: Request, res: Response) {
    const imageloja_id = req.query.imageloja_id;

    const { titleImage } = req.body;

    const updateTitle = new UpdateTitlePhotoTextoService();

    const imageTitle = await updateTitle.execute({
      imageloja_id,
      titleImage
    });

    return res.json(imageTitle);

  }
}

export { UpdateTitlePhotoTextoController }