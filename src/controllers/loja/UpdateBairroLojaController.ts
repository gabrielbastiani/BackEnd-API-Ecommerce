import { Request, Response } from 'express';
import { UpdateBairroLojaService } from '../../services/loja/UpdateBairroLojaService';

class UpdateBairroLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id;

    const { bairroLoja } = req.body;

    const updatebairroLoja = new UpdateBairroLojaService();

    const loja = await updatebairroLoja.execute({
      loja_id,
      bairroLoja,
    });

    return res.json(loja);
    
  }
}

export { UpdateBairroLojaController }