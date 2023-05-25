import { Request, Response } from 'express';
import { DeleteImageStoreService } from '../../../services/store/imageStore/DeleteImageStoreService';
import { FindUniqueImageStoreService } from '../../../services/store/imageStore/FindUniqueImageStoreService';
import fs from 'fs';

class DeleteImageStoreController {
  async handle(req: Request, res: Response) {
    const imageStore_id = req.query.imageStore_id as string;

    const updatePhoto = new DeleteImageStoreService();
    const findImage = new FindUniqueImageStoreService();

    const storeImage = await findImage.execute({
      imageStore_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + storeImage.image);

    const deleteImage = await updatePhoto.execute({
      imageStore_id,
    });

    return res.json([storeImage, deleteImage]);

  }
}

export { DeleteImageStoreController }