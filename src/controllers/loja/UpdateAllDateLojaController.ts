import { Request, Response } from 'express';
import { UpdateAllDateLojaService } from '../../services/loja/UpdateAllDateLojaService';

class UpdateAllDateLojaController {
  async handle(req: Request, res: Response) {
    const store_id = req.query.store_id;

    const {
      nameLoja,
      cnpjLoja,
      emailLoja,
      phoneLoja,
      cellPhoneLoja,
      ruaLoja,
      numeroLoja,
      bairroLoja,
      complementoLoja,
      cepLoja,
      cityLoja
    } = req.body;

    const updateDateLoja = new UpdateAllDateLojaService();

    const loja = await updateDateLoja.execute({
      store_id,
      nameLoja,
      cnpjLoja,
      emailLoja,
      phoneLoja,
      cellPhoneLoja,
      ruaLoja,
      numeroLoja,
      bairroLoja,
      complementoLoja,
      cepLoja,
      cityLoja
    });

    return res.json(loja);

  }
}

export { UpdateAllDateLojaController }