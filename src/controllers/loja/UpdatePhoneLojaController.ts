import { Request, Response } from 'express';
import { UpdatePhoneLojaService } from '../../services/loja/UpdatePhoneLojaService';

class UpdatePhoneLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id;

    const { phoneLoja } = req.body;

    const updatephoneLoja = new UpdatePhoneLojaService();

    const loja = await updatephoneLoja.execute({
      loja_id,
      phoneLoja,
    });

    return res.json(loja);
    
  }
}

export { UpdatePhoneLojaController }