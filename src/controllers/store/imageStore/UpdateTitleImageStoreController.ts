import { Request, Response } from 'express';
import { UpdateTitleImageStoreService } from '../../../services/store/imageStore/UpdateTitleImageStoreService';

class UpdateTitleImageStoreController {
  async handle(req: Request, res: Response) {
    const imageStore_id = req.query.imageStore_id as string;

    const { titleImage } = req.body;

    const updateTitle = new UpdateTitleImageStoreService();

    const imageTitle = await updateTitle.execute({
      imageStore_id,
      titleImage
    });

    return res.json(imageTitle);

  }
}

export { UpdateTitleImageStoreController }