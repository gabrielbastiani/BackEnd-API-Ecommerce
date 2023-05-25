import { Request, Response } from 'express';
import { UpdateDescriptionTextoService } from '../../../services/store/textoInstitucional/UpdateDescriptionTextoService';

class UpdateDescriptionTextoController {
  async handle(req: Request, res: Response) {
    const textoinstitucional_id = req.query.textoinstitucional_id;

    const { description } = req.body;

    const updateDescription = new UpdateDescriptionTextoService();

    const store = await updateDescription.execute({
      textoinstitucional_id,
      description
    });

    return res.json(store);

  }
}

export { UpdateDescriptionTextoController }