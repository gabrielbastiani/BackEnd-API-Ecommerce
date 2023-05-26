import { Request, Response } from 'express';
import { UpdateDisponibilidadeAtributoService } from '../../services/atributo/UpdateDisponibilidadeAtributoService';

class UpdateDisponibilidadeAtributoController {
  async handle(req: Request, res: Response) {
    const atributo_id = req.query.atributo_id as string;

    const udpateAtributo = new UpdateDisponibilidadeAtributoService();

    const atributo = await udpateAtributo.execute({
      atributo_id
    });

    return res.json(atributo);

  }
}

export { UpdateDisponibilidadeAtributoController }