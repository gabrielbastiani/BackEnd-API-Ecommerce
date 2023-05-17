import { Request, Response } from "express";
import { CreateValueAtributoService } from "../../services/atributo/CreateValueAtributoService";

class CreateValueAtributoController {
  async handle(req: Request, res: Response) {
    const {
      order,
      typeAtribute_id,
      product_id,
      valor,
      loja_id
    } = req.body;

    const atributos = new CreateValueAtributoService();

    const createAtributo = await atributos.execute({
      order,
      product_id,
      typeAtribute_id,
      valor,
      loja_id
    });

    return res.json(createAtributo);

  }
}

export { CreateValueAtributoController }