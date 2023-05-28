import { Request, Response } from "express";
import { FindGroupIDService } from "../../../services/category/groupCategory/FindGroupIDService";

class FindGroupIDController {
  async handle(req: Request, res: Response) {
    const groupId = req.query.groupId as string;

    const group = new FindGroupIDService();

    const categoiesGroup = await group.execute({ groupId });

    return res.json(categoiesGroup);
  }
}

export { FindGroupIDController };