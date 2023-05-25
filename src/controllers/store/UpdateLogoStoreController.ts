import { Request, Response } from 'express';
import { UpdateLogoStoreService } from '../../services/store/UpdateLogoStoreService';
import { FindUniqueStoreService } from '../../services/store/FindUniqueStoreService';
import fs from 'fs';

class UpdateLogoStoreController {
  async handle(req: Request, res: Response) {
    const store_id = req.query.store_id as string;

    const updateLogo = new UpdateLogoStoreService();
    const findStore = new FindUniqueStoreService();

    const logoStore = await findStore.execute({
      store_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + logoStore.logo);

    if (!req.file) {
      throw new Error('error upload file');
    } else {
      const { originalname, filename: logo } = req.file;

      const store = await updateLogo.execute({
        store_id,
        logo,
      });

      return res.json([logoStore, store]);
    }


  }
}

export { UpdateLogoStoreController }