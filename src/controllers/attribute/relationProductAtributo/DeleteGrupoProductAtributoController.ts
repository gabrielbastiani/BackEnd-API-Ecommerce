import { Request, Response } from "express";
import { DeleteGrupoProductAtributoService } from "../../../services/atributo/relationProductAtributo/DeleteGrupoProductAtributoService";

class DeleteGrupoProductAtributoController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const deleteRelationAtributo = new DeleteGrupoProductAtributoService();

    const atributo = await deleteRelationAtributo.execute({
      product_id,
    });

    return res.json(atributo);
  }
}

export { DeleteGrupoProductAtributoController };