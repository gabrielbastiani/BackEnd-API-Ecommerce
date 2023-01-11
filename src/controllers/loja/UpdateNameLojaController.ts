import { Request, Response } from 'express';
import { UpdateNameLojaService } from '../../services/loja/UpdateNameLojaService';

class UpdateNameLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id;

    const { nameLoja } = req.body;

    const updateNameLoja = new UpdateNameLojaService();

    const loja = await updateNameLoja.execute({
      loja_id,
      nameLoja,
    });

    return res.json(loja);
    
  }
}

export { UpdateNameLojaController }