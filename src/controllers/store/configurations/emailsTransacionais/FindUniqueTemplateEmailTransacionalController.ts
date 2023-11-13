import { Request, Response } from 'express';
import path from 'path';

class FindUniqueTemplateEmailTransacionalController {
    async handle(req: Request, res: Response) {
        const emailTransacional = req.query.emailTransacional as string;

        const fs = require('fs');
        const templatePaste = path.join(__dirname, "../../../../services/store/configurations/emailsTransacionais/emails_transacionais");
        const folderAndFile = `${templatePaste}/${emailTransacional}`;

        fs.readFile(folderAndFile, 'utf8', function (err: any, data: any) {
            if (err) {
                return;
            }

            return res.send(data);

        });

    }
}

export { FindUniqueTemplateEmailTransacionalController }