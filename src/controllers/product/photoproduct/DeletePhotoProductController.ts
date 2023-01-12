import { Request, Response } from "express";
import { DeletePhotoProductService } from "../../../services/product/photoproduct/DeletePhotoProductService";

class DeletePhotoProductController {
  async handle(req: Request, res: Response) {
    const photoProduts_id = req.query.photoProduts_id as string;

    const deletePhotoProductService = new DeletePhotoProductService();

    const userPhoto = await deletePhotoProductService.execute({
      photoProduts_id,
    });

    return res.json(userPhoto);
  }
}

export { DeletePhotoProductController };