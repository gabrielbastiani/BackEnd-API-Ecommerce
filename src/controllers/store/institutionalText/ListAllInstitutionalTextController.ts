import { Request, Response } from "express";
import { ListAllInstitutionalTextService } from "../../../services/store/institutionalText/ListAllInstitutionalTextService";

class ListAllInstitutionalTextController {
   async handle(req: Request, res: Response) {

      const listAllText = new ListAllInstitutionalTextService();

      const text = await listAllText.execute();

      return res.json(text);

   }
}

export { ListAllInstitutionalTextController }