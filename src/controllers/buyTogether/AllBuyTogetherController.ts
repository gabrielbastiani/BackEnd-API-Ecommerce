import { Request, Response } from "express";
import { AllBuyTogetherService } from "../../services/buyTogether/AllBuyTogetherService";

class AllBuyTogetherController {
  async handle(req: Request, res: Response) {
    const allBuyTogetherService = new AllBuyTogetherService();

    const buy = await allBuyTogetherService.execute();

    return res.json(buy);

  }
}

export { AllBuyTogetherController }