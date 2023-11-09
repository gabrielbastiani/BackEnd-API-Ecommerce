import { Request, Response } from 'express';
import { DeleteTemplateEmailFreteStatusOrderService } from '../../../services/order/templatesEmailsFreteOrderStatus/DeleteTemplateEmailFreteStatusOrderService';
import path from 'path';

class DeleteTemplateEmailStatusOrderFreteController {
    async handle(req: Request, res: Response) {

        const slug_name_file_email = req.query.slug_name_file_email as string;

        const deleteTemplate = new DeleteTemplateEmailFreteStatusOrderService();
        const template = await deleteTemplate.execute({ slug_name_file_email });

        const fs = require('fs');
        const templatePaste = path.join(__dirname, "../../../services/shippingTracking/template_emails_frete_status_order");
        const folderAndFile = `${templatePaste}/${slug_name_file_email}.ejs`;

        fs.unlink(folderAndFile, (err: any) => {
            if (err) {
                console.error(`Erro ao deletar o arquivo: ${err}`);
                return;
            }
        });

        return res.json(template);
    }
}

export { DeleteTemplateEmailStatusOrderFreteController }