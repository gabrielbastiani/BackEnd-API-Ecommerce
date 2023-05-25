import { Request, Response } from 'express';
import { UpdateDisponibilidadePhotoTextoService } from '../../../../services/store/textoInstitucional/photoTextoInstitucional/UpdateDisponibilidadePhotoTextoService';

class UpdateDisponibilidadePhotoTextoController {
  async handle(req: Request, res: Response) {
    const imageloja_id = req.query.imageloja_id as string;

    const updateImagens = new UpdateDisponibilidadePhotoTextoService();

    const imagemUpdate = await updateImagens.execute({
      imageloja_id
    });

    return res.json(imagemUpdate);

  }
}

export { UpdateDisponibilidadePhotoTextoController }