import { Request, Response } from "express";
import { DeleteLojaService } from "../../services/loja/DeleteLojaService";

class DeleteLojaController {
  async handle(req: Request, res: Response) {
    const loja_id = req.query.loja_id as string;

    const deleteLojaService = new DeleteLojaService();

    const userPhoto = await deleteLojaService.execute({
      loja_id,
    });

    return res.json(userPhoto);
  }
}

export { DeleteLojaController };