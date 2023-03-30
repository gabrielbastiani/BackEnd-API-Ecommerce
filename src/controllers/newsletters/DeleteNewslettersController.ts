import { Request, Response } from "express";
import { DeleteNewslettersService } from "../../services/newsletters/DeleteNewslettersService";

class DeleteNewslettersController {
    async handle(req: Request, res: Response) {
        const newsletter_id = req.query.newsletter_id as string;

        const deleteNews = new DeleteNewslettersService();

        const newsDelete = await deleteNews.execute({
            newsletter_id,
        });

        return res.json(newsDelete);
    }
}

export { DeleteNewslettersController };