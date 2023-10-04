import { Request, Response } from 'express';
import path from 'path';

class UpdateTemplateEmailAbandonedCartController {
    async handle(req: Request, res: Response) {

        const slug_name = req.query.slug_name as string;
        const { content } = req.body;

        const fs = require('fs');

        const templatePaste = path.join(__dirname, "../../../../src/services/abandonedCart/templatesEmailsCartAbandoned/template_emails_abandoned_cart");

        fs.readFileSync(`${templatePaste}/${slug_name}.ejs`, 'utf8', (err: any, data: any) => {
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }

            // O conteúdo do arquivo está em 'data'
            console.log('Conteúdo atual do arquivo:', data);

            // Escreva o novo conteúdo de volta no arquivo usando o método `fs.writeFile`
            fs.writeFile(`${templatePaste}/${slug_name}.ejs`, content, 'utf8', (err: any) => {
                if (err) {
                    console.error('Erro ao escrever no arquivo:', err);
                } else {
                    console.log('Conteúdo do arquivo atualizado com sucesso.');
                    return content;
                }
            });
        });

    }
}

export { UpdateTemplateEmailAbandonedCartController }