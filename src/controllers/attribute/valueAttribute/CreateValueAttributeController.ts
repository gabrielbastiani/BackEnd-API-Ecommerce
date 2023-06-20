import { Request, Response } from "express";
import { CreateValueAttributeService } from "../../../services/attribute/valueAttribute/CreateValueAttributeService";

class CreateValueAttributeController {
  async handle(req: Request, res: Response) {
    const {
      type,
      value,
      slug,
      order,
      store_id
    } = req.body;

    const attributes = new CreateValueAttributeService();

    const createAttribute = await attributes.execute({
      type,
      value,
      slug,
      order,
      store_id
    });

    return res.json(createAttribute);

  }
}

export { CreateValueAttributeController }