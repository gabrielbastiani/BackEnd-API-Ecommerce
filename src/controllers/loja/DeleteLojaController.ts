import { Request, Response } from "express";
import { DeleteLojaService } from "../../services/loja/DeleteLojaService";

class DeleteLojaController {
  async handle(req: Request, res: Response) {
    const store_id = req.query.store_id as string;

    const deleteLojaService = new DeleteLojaService();

    const userPhoto = await deleteLojaService.execute({
      store_id,
    });

    return res.json(userPhoto);
  }
}

export { DeleteLojaController };