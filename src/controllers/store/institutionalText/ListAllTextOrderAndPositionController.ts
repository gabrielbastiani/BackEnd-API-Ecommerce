import { Request, Response } from "express";
import { ListAllTextOrderAndPositionService } from "../../../services/store/institutionalText/ListAllTextOrderAndPositionService";

class ListAllTextOrderAndPositionController {
   async handle(req: Request, res: Response) {

      const slugPosition = req.query.slugPosition as string;

      const listText = new ListAllTextOrderAndPositionService();

      const text = await listText.execute({ slugPosition });

      return res.json(text);

   }
}

export { ListAllTextOrderAndPositionController }