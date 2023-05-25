import { Request, Response } from 'express';
import { UpdateTitleTextoService } from '../../../services/store/textoInstitucional/UpdateTitleTextoService';

class UpdateTitleTextoController {
  async handle(req: Request, res: Response) {
    const textoinstitucional_id = req.query.textoinstitucional_id;

    const { title } = req.body;

    const updateTitle = new UpdateTitleTextoService();

    const store = await updateTitle.execute({
      textoinstitucional_id,
      title
    });

    return res.json(store);

  }
}

export { UpdateTitleTextoController }