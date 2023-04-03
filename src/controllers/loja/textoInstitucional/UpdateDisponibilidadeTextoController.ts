import { Request, Response } from 'express';
import { UpdateDisponibilidadeTextoService } from '../../../services/loja/textoInstitucional/UpdateDisponibilidadeTextoService';

class UpdateDisponibilidadeTextoController {
  async handle(req: Request, res: Response) {
    const textoinstitucional_id = req.query.textoinstitucional_id as string;

    const updateTextos = new UpdateDisponibilidadeTextoService();

    const textosUpdate = await updateTextos.execute({
      textoinstitucional_id
    });

    return res.json(textosUpdate);

  }
}

export { UpdateDisponibilidadeTextoController }