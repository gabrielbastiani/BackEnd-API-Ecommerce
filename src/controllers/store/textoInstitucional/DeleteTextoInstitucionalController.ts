import { Request, Response } from "express";
import { DeleteTextoInstitucionalService } from "../../../services/store/textoInstitucional/DeleteTextoInstitucionalService";

class DeleteTextoInstitucionalController {
  async handle(req: Request, res: Response) {
    const textoinstitucional_id = req.query.textoinstitucional_id as string;

    const deleteLojaService = new DeleteTextoInstitucionalService();

    const deleteTexto = await deleteLojaService.execute({
      textoinstitucional_id,
    });

    return res.json(deleteTexto);
  }
}

export { DeleteTextoInstitucionalController };