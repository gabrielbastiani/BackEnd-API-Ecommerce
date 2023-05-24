import { Request, Response } from "express";
import { CreateAtributoService } from "../../services/atributo/CreateAtributoService";

class CreateAtributoController {
  async handle(req: Request, res: Response) {
    const {
      tipo,
      slug,
      valor,
      slugValor,
      store_id
    } = req.body;

    const atributos = new CreateAtributoService();

    const createAtributo = await atributos.execute({
      tipo,
      slug,
      valor,
      slugValor,
      store_id
    });

    return res.json(createAtributo);

  }
}

export { CreateAtributoController }