import { Request, Response } from "express";
import { DeleteInstitutionalTextService } from "../../../services/store/institutionalText/DeleteInstitutionalTextService";

class DeleteInstitutionalTextController {
  async handle(req: Request, res: Response) {
    const institutionalText_id = req.query.institutionalText_id as string;

    const deleteLojaService = new DeleteInstitutionalTextService();

    const deleteTexto = await deleteLojaService.execute({
      institutionalText_id,
    });

    return res.json(deleteTexto);
  }
}

export { DeleteInstitutionalTextController };