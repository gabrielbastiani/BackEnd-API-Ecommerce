import { Request, Response } from 'express';
import { UpdateTitleTextoService } from '../../../services/loja/textoInstitucional/UpdateTitleTextoService';

class UpdateTitleTextoController {
  async handle(req: Request, res: Response) {
    const textoinstitucional_id = req.query.textoinstitucional_id;

    const { title } = req.body;

    const updateTitle = new UpdateTitleTextoService();

    const loja = await updateTitle.execute({
      textoinstitucional_id,
      title
    });

    return res.json(loja);

  }
}

export { UpdateTitleTextoController }