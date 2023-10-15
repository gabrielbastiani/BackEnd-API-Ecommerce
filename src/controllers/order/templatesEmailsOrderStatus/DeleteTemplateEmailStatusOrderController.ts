import { Request, Response } from 'express';
import { DeleteTemplateEmailStatusOrderService } from '../../../services/order/templatesEmailsOrderStatus/DeleteTemplateEmailStatusOrderService';
import path from 'path';

class DeleteTemplateEmailStatusOrderController {
    async handle(req: Request, res: Response) {

        const slug_name_file_email = req.query.slug_name_file_email as string;

        const deleteTemplate = new DeleteTemplateEmailStatusOrderService();
        const template = await deleteTemplate.execute({ slug_name_file_email });

        const fs = require('fs');
        const templatePaste = path.join(__dirname, "../../../../src/services/order/templatesEmailsOrderStatus/template_emails_status_order");
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

export { DeleteTemplateEmailStatusOrderController }