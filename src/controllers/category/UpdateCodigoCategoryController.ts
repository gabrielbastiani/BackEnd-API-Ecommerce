import { Request, Response } from 'express';
import { UpdateCodigoCategoryService } from '../../services/category/UpdateCodigoCategoryService';

class UpdateCodigoCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const { codigo } = req.body;

    const updateUserService = new UpdateCodigoCategoryService();

    const codigoCategory = await updateUserService.execute({
      category_id,
      codigo,
    });

    return res.json(codigoCategory);

  }
}

export { UpdateCodigoCategoryController }