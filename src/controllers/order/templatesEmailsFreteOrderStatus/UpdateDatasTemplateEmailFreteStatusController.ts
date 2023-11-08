import { Request, Response } from 'express';
import { UpdateDatasTemplateEmailFreteStatusService } from '../../../services/order/templatesEmailsFreteOrderStatus/UpdateDatasTemplateEmailFreteStatusService';

class UpdateDatasTemplateEmailFreteStatusController {
    async handle(req: Request, res: Response) {
        const templateOrderEmail_id = req.query.templateOrderEmail_id as string;

        const {
            status_frete,
            subject
        } = req.body;

        const updateConfigs = new UpdateDatasTemplateEmailFreteStatusService();

        const configs = await updateConfigs.execute({
            templateOrderEmail_id,
            status_frete,
            subject
        });

        return res.json(configs);

    }
}

export { UpdateDatasTemplateEmailFreteStatusController }