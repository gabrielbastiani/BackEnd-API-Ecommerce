import { Request, Response } from "express";
import { DeleteRelationProductAtributoService } from "../../../services/atributo/relationProductAtributo/DeleteRelationProductAtributoService";

class DeleteRelationProductAtributoController {
  async handle(req: Request, res: Response) {
    const relationProductAtributo_id = req.query.relationProductAtributo_id as string;

    const deleteRelationAtributo = new DeleteRelationProductAtributoService();

    const atributo = await deleteRelationAtributo.execute({
      relationProductAtributo_id,
    });

    return res.json(atributo);
  }
}

export { DeleteRelationProductAtributoController };