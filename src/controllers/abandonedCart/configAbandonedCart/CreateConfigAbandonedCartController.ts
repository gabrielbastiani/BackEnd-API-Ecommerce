import { Request, Response } from "express";
import { CreateConfigAbandonedCartService } from "../../../services/abandonedCart/configAbandonedCart/CreateConfigAbandonedCartService";

class CreateConfigAbandonedCartController {
    async handle(req: Request, res: Response) {
        const {
            subject,
            code_cupom,
            time_send_email,
            active
        } = req.body;

        const configs = new CreateConfigAbandonedCartService();

        const configsCreate = await configs.execute({
            subject,
            code_cupom,
            time_send_email,
            active
        });

        return res.json(configsCreate);

    }
}

export { CreateConfigAbandonedCartController }