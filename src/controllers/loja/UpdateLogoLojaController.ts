import { Request, Response } from 'express';
import { UpdateLogoLojaService } from '../../services/loja/UpdateLogoLojaService';

class UpdateLogoLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id;

    const updateLogo = new UpdateLogoLojaService();

    const { originalname, filename: logoLoja } = req.file;

    const loja = await updateLogo.execute({
      loja_id,
      logoLoja,
    });

    return res.json(loja);
    
  }
}

export { UpdateLogoLojaController }