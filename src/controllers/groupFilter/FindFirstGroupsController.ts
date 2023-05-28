import { Request, Response } from "express";
import { FindFirstGroupsService } from "../../services/groupFilter/FindFirstGroupsService";

class FindFirstGroupsController {
  async handle(req: Request, res: Response) {
    const all = new FindFirstGroupsService();

    const findAll = await all.execute();

    return res.json(findAll);
  }
}

export { FindFirstGroupsController };