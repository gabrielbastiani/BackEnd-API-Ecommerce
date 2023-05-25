import { Request, Response } from 'express';
import { UpdatePositionImageStoreService } from '../../../services/store/imageStore/UpdatePositionImageStoreService';

class UpdatePositionImageStoreController {
  async handle(req: Request, res: Response) {
    const imageStore_id = req.query.imageStore_id as string;

    const { position, slugPosition } = req.body;

    const updatePosition = new UpdatePositionImageStoreService();

    const positions = await updatePosition.execute({
      imageStore_id,
      position,
      slugPosition
    });

    return res.json(positions);

  }
}

export { UpdatePositionImageStoreController }