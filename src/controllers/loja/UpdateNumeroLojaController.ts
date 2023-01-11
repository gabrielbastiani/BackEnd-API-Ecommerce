import { Request, Response } from 'express';
import { UpdateNumeroLojaService } from '../../services/loja/UpdateNumeroLojaService';

class UpdateNumeroLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id;

    const { numeroLoja } = req.body;

    const updatenumeroLoja = new UpdateNumeroLojaService();

    const loja = await updatenumeroLoja.execute({
      loja_id,
      numeroLoja,
    });

    return res.json(loja);
    
  }
}

export { UpdateNumeroLojaController }