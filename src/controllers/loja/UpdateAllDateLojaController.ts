import { Request, Response } from 'express';
import { UpdateAllDateLojaService } from '../../services/loja/UpdateAllDateLojaService';

class UpdateAllDateLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id;

    const {
      nameLoja,
      cnpjLoja,
      emailLoja,
      phoneLoja,
      ruaLoja,
      numeroLoja,
      bairroLoja,
      complementoLoja,
      cepLoja,
      cityLoja
    } = req.body;

    const updateDateLoja = new UpdateAllDateLojaService();

    const loja = await updateDateLoja.execute({
      loja_id,
      nameLoja,
      cnpjLoja,
      emailLoja,
      phoneLoja,
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