import { Request, Response } from 'express';
import { UpdateDatasTemplateEmailStatusService } from '../../../services/order/templatesEmailsOrderStatus/UpdateDatasTemplateEmailStatusService'; 

class UpdateDatasTemplateEmailStatusController {
    async handle(req: Request, res: Response) {
        const templateOrderEmail_id = req.query.templateOrderEmail_id as string;

        const {
            status_order,
            subject
        } = req.body;

        const updateConfigs = new UpdateDatasTemplateEmailStatusService();

        const configs = await updateConfigs.execute({
            templateOrderEmail_id,
            status_order,
            subject
        });

        return res.json(configs);

    }
}

export { UpdateDatasTemplateEmailStatusController }