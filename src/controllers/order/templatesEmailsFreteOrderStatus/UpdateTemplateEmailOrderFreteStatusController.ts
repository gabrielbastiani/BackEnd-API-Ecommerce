import { Request, Response } from 'express';
import path from 'path';

class UpdateTemplateEmailOrderFreteStatusController {
    async handle(req: Request, res: Response) {

        const slug_name_file_email = req.query.slug_name_file_email as string;
        const { content } = req.body;

        const fs = require('fs');

        const templatePaste = path.join(__dirname, "../../../services/shippingTracking/template_emails_frete_status_order");

        fs.writeFile(`${templatePaste}/${slug_name_file_email}.ejs`, content, 'utf8', (err: any) => {
            if (err) {
                console.error('Erro ao escrever no arquivo:', err);
            } else {
                console.log('Conteúdo do arquivo atualizado com sucesso.');
                return res.send(content);
            }
        });

    }
}

export { UpdateTemplateEmailOrderFreteStatusController }