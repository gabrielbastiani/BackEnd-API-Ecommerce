import { Request, Response } from 'express';
import { DeleteTemplateEmailAbandonedService } from '../../../services/abandonedCart/templatesEmailsCartAbandoned/DeleteTemplateEmailAbandonedService';
import path from 'path';

class DeleteTemplateEmailAbandonedController {
    async handle(req: Request, res: Response) {

        const slug_name_file_email = req.query.slug_name_file_email as string;

        const deleteTemplate = new DeleteTemplateEmailAbandonedService();
        const template = await deleteTemplate.execute({ slug_name_file_email });

        const fs = require('fs');
        const templatePaste = path.join(__dirname, "../../../../src/services/abandonedCart/templatesEmailsCartAbandoned/template_emails_abandoned_cart");
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

export { DeleteTemplateEmailAbandonedController }