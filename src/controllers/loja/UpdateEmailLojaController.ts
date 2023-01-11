import { Request, Response } from 'express';
import { UpdateEmailLojaService } from '../../services/loja/UpdateEmailLojaService';

class UpdateEmailLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id;

    const { emailLoja } = req.body;

    const updateemailLoja = new UpdateEmailLojaService();

    const loja = await updateemailLoja.execute({
      loja_id,
      emailLoja,
    });

    return res.json(loja);
    
  }
}

export { UpdateEmailLojaController }