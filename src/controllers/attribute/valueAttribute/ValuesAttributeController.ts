import { Request, Response } from "express";
import { ValuesAttributeService } from "../../../services/attribute/valueAttribute/ValuesAttributeService";

class ValuesAttributeController {
   async handle(req: Request, res: Response) {

      const listAttributes = new ValuesAttributeService();

      const attributes = await listAttributes.execute();

      return res.json(attributes);

   }
}

export { ValuesAttributeController }