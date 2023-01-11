import { Request, Response } from 'express';
import { UpdateRuaLojaService } from '../../services/loja/UpdateRuaLojaService';

class UpdateRuaLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id;

    const { ruaLoja } = req.body;

    const updateruaLoja = new UpdateRuaLojaService();

    const loja = await updateruaLoja.execute({
      loja_id,
      ruaLoja,
    });

    return res.json(loja);
    
  }
}

export { UpdateRuaLojaController }