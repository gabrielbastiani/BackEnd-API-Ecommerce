import { Request, Response } from 'express';
import { UpdateCellPhoneLojaService } from '../../services/loja/UpdateCellPhoneLojaService';

class UpdateCellPhoneLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id;

    const { cellPhoneLoja } = req.body;

    const updatephoneLoja = new UpdateCellPhoneLojaService();

    const loja = await updatephoneLoja.execute({
      loja_id,
      cellPhoneLoja,
    });

    return res.json(loja);
    
  }
}

export { UpdateCellPhoneLojaController }