import { Request, Response } from "express";
import { CreateProductCategoryService } from "../../../services/product/productCategory/CreateProductCategoryService";

class CreateProductCategoryController {
    async handle(req: Request, res: Response) {
        const {
            product_id,
            name,
            order,
            store_id
        } = req.body;

        const productCategory = new CreateProductCategoryService();

        const category = await productCategory.execute({
            product_id,
            name,
            order,
            store_id
        });

        return res.json(category)

    }
}

export { CreateProductCategoryController }