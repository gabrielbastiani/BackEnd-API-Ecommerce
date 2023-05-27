import { Request, Response } from "express";
import { CreateTypeAttributeService } from "../../services/typeAttribute/CreateTypeAttributeService";

class CreateTypeAttributeController {
  async handle(req: Request, res: Response) {
    const {
      type,
      slug,
      store_id
    } = req.body;

    const attributes = new CreateTypeAttributeService();

    const createAttribute = await attributes.execute({
      type,
      slug,
      store_id
    });

    return res.json(createAttribute);

  }
}

export { CreateTypeAttributeController }