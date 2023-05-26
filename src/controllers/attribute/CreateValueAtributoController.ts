import { Request, Response } from "express";
import { CreateValueAtributoService } from "../../services/atributo/CreateValueAtributoService";

class CreateValueAtributoController {
  async handle(req: Request, res: Response) {
    const {
      tipo,
      product_id,
      valor,
      store_id
    } = req.body;

    const atributos = new CreateValueAtributoService();

    const createValue = await atributos.execute({
      tipo,
      product_id,
      valor,
      store_id
    });

    return res.json(createValue);

  }
}

export { CreateValueAtributoController }