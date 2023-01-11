import { Request, Response } from 'express';
import { UpdateCNPJLojaService } from '../../services/loja/UpdateCNPJLojaService';

class UpdateCNPJLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id;

    const { cnpjLoja } = req.body;

    const updatecnpjLoja = new UpdateCNPJLojaService();

    const loja = await updatecnpjLoja.execute({
      loja_id,
      cnpjLoja,
    });

    return res.json(loja);
    
  }
}

export { UpdateCNPJLojaController }