import { Request, Response } from 'express';
import { UpdateComplementoLojaService } from '../../services/loja/UpdateComplementoLojaService';

class UpdateComplementoLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id;

    const { complementoLoja } = req.body;

    const updatecomplementoLoja = new UpdateComplementoLojaService();

    const loja = await updatecomplementoLoja.execute({
      loja_id,
      complementoLoja,
    });

    return res.json(loja);
    
  }
}

export { UpdateComplementoLojaController }