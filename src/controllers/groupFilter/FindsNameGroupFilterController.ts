import { Request, Response } from "express";
import { FindsNameGroupFilterService } from "../../services/groupFilter/FindsNameGroupFilterService";

class FindsNameGroupFilterController {
  async handle(req: Request, res: Response) {
    const nameGroup = req.query.nameGroup as string;

    const groupName = new FindsNameGroupFilterService();

    const name = await groupName.execute({
      nameGroup,
    });

    return res.json(name);
  }
}

export { FindsNameGroupFilterController };