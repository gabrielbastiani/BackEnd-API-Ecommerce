import { Request, Response } from "express";
import { ListAllSocialMediaOrderAndPositionService } from "../../../services/store/socialMedia/ListAllSocialMediaOrderAndPositionService";

class ListAllSocialMediaOrderAndPositionController {
   async handle(req: Request, res: Response) {

      const slugPosition = req.query.slugPosition as string;

      const listOrderMedia = new ListAllSocialMediaOrderAndPositionService();

      const medias = await listOrderMedia.execute({ slugPosition });

      return res.json(medias);

   }
}

export { ListAllSocialMediaOrderAndPositionController }