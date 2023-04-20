import { Request, Response } from 'express';
import { UpdateLogoLojaService } from '../../services/loja/UpdateLogoLojaService';
import { DeleteLogomarcaService } from '../../services/loja/DeleteLogomarcaService';
import fs from 'fs';

class UpdateLogoLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id as string;

    const updateLogo = new UpdateLogoLojaService();
    const deleteLogo = new DeleteLogomarcaService();

    const logomarcaLoja = await deleteLogo.execute({
      loja_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + logomarcaLoja.logoLoja);

    if (!req.file) {
      throw new Error('error upload file');
    } else {
      const { originalname, filename: logoLoja } = req.file;

    const loja = await updateLogo.execute({
      loja_id,
      logoLoja,
    });

    return res.json([logomarcaLoja, loja]);
    }
    
    
  }
}

export { UpdateLogoLojaController }