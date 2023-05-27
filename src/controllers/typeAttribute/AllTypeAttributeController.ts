import { Request, Response } from "express";
import { AllTypeAttributeService } from "../../services/typeAttribute/AllTypeAttributeService";

class AllTypeAttributeController {
   async handle(req: Request, res: Response) {
      const listAttributes = new AllTypeAttributeService();

      const attributes = await listAttributes.execute();

      return res.json(attributes);

   }
}

export { AllTypeAttributeController }