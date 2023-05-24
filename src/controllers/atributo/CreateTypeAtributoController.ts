import { Request, Response } from "express";
import { CreateTypeAtributoService } from "../../services/atributo/CreateTypeAtributoService";

class CreateTypeAtributoController {
  async handle(req: Request, res: Response) {
    const {
      tipo,
      store_id
    } = req.body;

    const atributos = new CreateTypeAtributoService();

    const createAtributo = await atributos.execute({
      tipo,
      store_id
    });

    return res.json(createAtributo);

  }
}

export { CreateTypeAtributoController }