import { Request, Response } from 'express';
import path from 'path';

class UpdateTemplateEmailTransacionalController {
    async handle(req: Request, res: Response) {

        const emailTransacional = req.query.emailTransacional as string;
        const { content } = req.body;

        const fs = require('fs');

        const templatePaste = path.join(__dirname, "../../../../services/store/configurations/emailsTransacionais/emails_transacionais");

        fs.writeFile(`${templatePaste}/${emailTransacional}`, content, 'utf8', (err: any) => {
            if (err) {
                console.error('Erro ao escrever no arquivo:', err);
            } else {
                console.log('Conteúdo do arquivo atualizado com sucesso.');
                return res.send(content);
            }
        });

    }
}

export { UpdateTemplateEmailTransacionalController }