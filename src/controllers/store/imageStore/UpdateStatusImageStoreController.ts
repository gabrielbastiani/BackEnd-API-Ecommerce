import { Request, Response } from 'express';
import { UpdateStatusImageStoreService } from '../../../services/store/imageStore/UpdateStatusImageStoreService';

class UpdateStatusImageStoreController {
  async handle(req: Request, res: Response) {
    const imageStore_id = req.query.imageStore_id as string;

    const updateImagens = new UpdateStatusImageStoreService();

    const imagemUpdate = await updateImagens.execute({
      imageStore_id
    });

    return res.json(imagemUpdate);

  }
}

export { UpdateStatusImageStoreController }