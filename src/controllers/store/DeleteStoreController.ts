import { Request, Response } from "express";
import { DeleteStoreService } from "../../services/store/DeleteStoreService";

class DeleteStoreController {
  async handle(req: Request, res: Response) {
    const store_id = req.query.store_id as string;

    const deleteStore = new DeleteStoreService();

    const storeDelete = await deleteStore.execute({
      store_id,
    });

    return res.json(storeDelete);
  }
}

export { DeleteStoreController };