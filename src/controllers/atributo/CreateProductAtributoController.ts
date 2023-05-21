import { Request, Response } from "express";
import { CreateProductAtributoService } from "../../services/atributo/CreateProductAtributoService";

class CreateProductAtributoController {
  async handle(req: Request, res: Response) {
    const {
      typeAtribute_id,
      product_id,
      loja_id
    } = req.body;

    const atributos = new CreateProductAtributoService();

    const createAtributo = await atributos.execute({
      typeAtribute_id,
      product_id,
      loja_id
    });

    return res.json(createAtributo);

  }
}

export { CreateProductAtributoController }