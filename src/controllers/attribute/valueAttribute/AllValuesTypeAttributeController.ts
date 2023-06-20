import { Request, Response } from "express";
import { AllValuesTypeAttributeService } from "../../../services/attribute/valueAttribute/AllValuesTypeAttributeService";

class AllValuesTypeAttributeController {
   async handle(req: Request, res: Response) {
      const type = req.query.type as string;

      const listAttributes = new AllValuesTypeAttributeService();

      const attributes = await listAttributes.execute({ type });

      return res.json(attributes);

   }
}

export { AllValuesTypeAttributeController }