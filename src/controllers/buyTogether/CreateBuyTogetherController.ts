import { Request, Response } from "express";
import { CreateBuyTogetherService } from "../../services/buyTogether/CreateBuyTogetherService";

class CreateBuyTogetherController {
  async handle(req: Request, res: Response) {
    const {
      nameGroup,
      product_id,
      nivel,
      parentId,
      order,
      store_id
    } = req.body;

    const together = new CreateBuyTogetherService();

    const buy = await together.execute({
      nameGroup,
      product_id,
      nivel,
      parentId,
      order,
      store_id
    });

    return res.json(buy);

  }
}

export { CreateBuyTogetherController }