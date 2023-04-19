import { Request, Response } from 'express'
import { CreateCategoryService } from '../../services/category/CreateCategoryService'

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { categoryName, slug, order, posicao, slugPosicao, loja_id } = req.body;

    const createCategoryService = new CreateCategoryService();

    if (!req.file) {
      throw new Error("error upload file");
    } else {

      const { originalname, filename: imageCategory } = req.file;

      const category = await createCategoryService.execute({
        categoryName,
        slug,
        order,
        posicao,
        slugPosicao,
        imageCategory,
        loja_id
      });

      return res.json(category);

    }

  }

}

export { CreateCategoryController }