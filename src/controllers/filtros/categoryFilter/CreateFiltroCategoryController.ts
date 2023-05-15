import { Request, Response } from "express";
import { CreateFiltroCategoryService } from "../../../services/filtros/categoryFilter/CreateFiltroCategoryService";

class CreateFiltroCategoryController {
    async handle(req: Request, res: Response) {
        const {
            groupFilter_id,
            categoryName,
            order,
            slugCategoryOrItem,
            loja_id
        } = req.body;

        const filtrosCategory = new CreateFiltroCategoryService();

        const filtro = await filtrosCategory.execute({
            groupFilter_id,
            categoryName,
            order,
            slugCategoryOrItem,
            loja_id
        });

        return res.json(filtro)

    }
}

export { CreateFiltroCategoryController }