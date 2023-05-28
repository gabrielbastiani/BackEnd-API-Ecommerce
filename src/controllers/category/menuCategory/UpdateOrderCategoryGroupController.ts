import { Request, Response } from 'express';
import { UpdateOrderCategoryGroupService } from '../../../services/category/groupCategory/UpdateOrderCategoryGroupService';

class UpdateOrderCategoryGroupController {
  async handle(req: Request, res: Response) {
    const groupCategoy_id = req.query.groupCategoy_id;

    const { order } = req.body;

    const updateOrder = new UpdateOrderCategoryGroupService();

    const orderGroup = await updateOrder.execute({
      groupCategoy_id,
      order,
    });

    return res.json(orderGroup);
    
  }
}

export { UpdateOrderCategoryGroupController }