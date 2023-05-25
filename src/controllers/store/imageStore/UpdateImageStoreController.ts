import { Request, Response } from 'express';
import { UpdateImageStoreService } from '../../../services/store/imageStore/UpdateImageStoreService';
import { FindUniqueImageStoreService } from '../../../services/store/imageStore/FindUniqueImageStoreService';
import fs from 'fs';

class UpdateImageStoreController {
  async handle(req: Request, res: Response) {
    const imageStore_id = req.query.imageStore_id as string;

    const updatePhoto = new UpdateImageStoreService();
    const findImage = new FindUniqueImageStoreService();

    const storeImage = await findImage.execute({
      imageStore_id
    });

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + storeImage.image);

    if (!req.file) {
      throw new Error('error upload file');
    } else {
      const { originalname, filename: image } = req.file;

      const updateImages = await updatePhoto.execute({
        imageStore_id,
        image,
      });

      return res.json([storeImage, updateImages]);

    }

  }
}

export { UpdateImageStoreController }