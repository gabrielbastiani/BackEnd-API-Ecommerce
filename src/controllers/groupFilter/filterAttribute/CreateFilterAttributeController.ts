import { Request, Response } from "express";
import { CreateFilterAttributeService } from "../../../services/groupFilter/filterAttribute/CreateFilterAttributeService";

class CreateFilterAttributeController {
    async handle(req: Request, res: Response) {
        const {
            groupFilter_id,
            value,
            order,
            store_id
        } = req.body;

        const filtroAtributo = new CreateFilterAttributeService();

        const filtro = await filtroAtributo.execute({
            groupFilter_id,
            value,
            order,
            store_id
        });

        return res.json(filtro)

    }
}

export { CreateFilterAttributeController }