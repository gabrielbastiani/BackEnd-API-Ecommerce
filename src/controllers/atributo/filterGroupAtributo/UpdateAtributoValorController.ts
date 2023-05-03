import { Request, Response } from 'express';
import { UpdateAtributoValorService } from '../../../services/atributo/filterGroupAtributo/UpdateAtributoValorService';

class UpdateAtributoValorController {
  async handle(req: Request, res: Response) {
    const groupFilterAtributo_id = req.query.groupFilterAtributo_id as string;

    const { atributo_id } = req.body;

    const updateAtributo = new UpdateAtributoValorService();

    const atributo = await updateAtributo.execute({
      groupFilterAtributo_id,
      atributo_id
    });

    return res.json(atributo);

  }
}

export { UpdateAtributoValorController }