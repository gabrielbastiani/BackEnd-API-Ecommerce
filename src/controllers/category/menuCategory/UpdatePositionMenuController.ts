import { Request, Response } from 'express';
import { UpdatePositionMenuService } from '../../../services/category/menuCategory/UpdatePositionMenuService';

class UpdatePositionMenuController {
  async handle(req: Request, res: Response) {
    const menuCategory_id = req.query.menuCategory_id as string;

    const { position, slugPosition } = req.body;

    const updatePosition = new UpdatePositionMenuService();

    const menu = await updatePosition.execute({
      menuCategory_id,
      position,
      slugPosition
    });

    return res.json(menu);

  }
}

export { UpdatePositionMenuController }