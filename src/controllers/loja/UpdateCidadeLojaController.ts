import { Request, Response } from 'express';
import { UpdateCidadeLojaService } from '../../services/loja/UpdateCidadeLojaService';

class UpdateCidadeLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id;

    const { cityLoja } = req.body;

    const updatecityLoja = new UpdateCidadeLojaService();

    const loja = await updatecityLoja.execute({
      loja_id,
      cityLoja,
    });

    return res.json(loja);
    
  }
}

export { UpdateCidadeLojaController }