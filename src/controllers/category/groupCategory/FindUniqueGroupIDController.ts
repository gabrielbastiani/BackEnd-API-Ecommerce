import { Request, Response } from "express";
import { FindUniqueGroupIDService } from "../../../services/category/groupCategory/FindUniqueGroupIDService";

class FindUniqueGroupIDController {
  async handle(req: Request, res: Response) {
    const groupCategoy_id = req.query.groupCategoy_id as string;

    const group = new FindUniqueGroupIDService();

    const categoiesGroup = await group.execute({ groupCategoy_id });

    return res.json(categoiesGroup);
  }
}

export { FindUniqueGroupIDController };