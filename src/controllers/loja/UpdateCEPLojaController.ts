import { Request, Response } from 'express';
import { UpdateCEPLojaService } from '../../services/loja/UpdateCEPLojaService';

class UpdateCEPLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id;

    const { cepLoja } = req.body;

    const updatecepLoja = new UpdateCEPLojaService();

    const loja = await updatecepLoja.execute({
      loja_id,
      cepLoja,
    });

    return res.json(loja);
    
  }
}

export { UpdateCEPLojaController }