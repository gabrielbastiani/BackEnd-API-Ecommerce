import { Request, Response } from 'express';
import path from 'path';

class FindTemplateEmailAbandonedController {
    async handle(req: Request, res: Response) {
        const slug_name = req.query.slug_name as string;

        const fs = require('fs');

        const templatePaste = path.join(__dirname, "../../../../src/services/abandonedCart/templatesEmailsCartAbandoned/template_emails_abandoned_cart");

        fs.readFileSync(`${templatePaste}/${slug_name}.ejs`, 'utf8', function (err: any, data: any) {
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }

            return data;

        });

    }
}

export { FindTemplateEmailAbandonedController }