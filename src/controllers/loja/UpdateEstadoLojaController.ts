import { Request, Response } from 'express';
import { UpdateEstadoLojaService } from '../../services/loja/UpdateEstadoLojaService';

class UpdateEstadoLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id;

    const { stateLoja } = req.body;

    const updatestateLoja = new UpdateEstadoLojaService();

    const loja = await updatestateLoja.execute({
      loja_id,
      stateLoja,
    });

    return res.json(loja);
    
  }
}

export { UpdateEstadoLojaController }