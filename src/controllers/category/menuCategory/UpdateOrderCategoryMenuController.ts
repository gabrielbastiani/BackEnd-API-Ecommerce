import { Request, Response } from 'express';
import { UpdateOrderCategoryMenuService } from '../../../services/category/menuCategory/UpdateOrderCategoryMenuService';

class UpdateOrderCategoryMenuController {
  async handle(req: Request, res: Response) {
    const menuCategory_id = req.query.menuCategory_id as string;

    const { order } = req.body;

    const updateOrder = new UpdateOrderCategoryMenuService();

    const orderGroup = await updateOrder.execute({
      menuCategory_id,
      order,
    });

    return res.json(orderGroup);

  }
}

export { UpdateOrderCategoryMenuController }