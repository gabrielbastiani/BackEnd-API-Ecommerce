import { Request, Response } from 'express';
import path from 'path';

class FindTemplateEmailAbandonedController {
    async handle(req: Request, res: Response) {
        const slug_name_file_email = req.query.slug_name_file_email as string;

        const fs = require('fs');
        const templatePaste = path.join(__dirname, "../../../../src/services/abandonedCart/templatesEmailsCartAbandoned/template_emails_abandoned_cart");
        const folderAndFile = `${templatePaste}/${slug_name_file_email}.ejs`;

        fs.readFile(folderAndFile, 'utf8', function (err: any, data: any) {
            if (err) {
                return;
            }

            return res.send(data);

        });

    }
}

export { FindTemplateEmailAbandonedController }