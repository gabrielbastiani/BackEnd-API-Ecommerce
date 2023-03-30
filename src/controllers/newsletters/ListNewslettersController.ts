import { Request, Response } from "express";
import { ListNewslettersService } from "../../services/newsletters/ListNewslettersService";

class ListNewslettersController {
    async handle(req: Request, res: Response) {
        const news = new ListNewslettersService();

        const newsletters = await news.execute();

        return res.json(newsletters);

    }
}

export { ListNewslettersController }