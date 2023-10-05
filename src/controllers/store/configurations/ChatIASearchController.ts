import { Request, Response } from "express";
import { ChatIASearchService } from "../../../services/store/configurations/ChatIASearchService";

class ChatIASearchController {
    async handle(req: Request, res: Response) {
        const {
            searchText
        } = req.body;

        const iaSearch = new ChatIASearchService();

        const searchIA = await iaSearch.execute({
            searchText
        });

        return res.json(searchIA);
    }
}

export { ChatIASearchController };