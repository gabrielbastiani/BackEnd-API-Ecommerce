import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

class FindEmailTransacionaisController {
  async handle(req: Request, res: Response) {

    const requiredPath = path.join(__dirname, `../../../../services/store/configurations/emailsTransacionais/emails_transacionais`);

        fs.readdir(requiredPath, (err: any, arquivos: string[]) => {
            if (err) {
                console.error('Erro ao listar os arquivos:', err);
                return;
            }

            const listemails = arquivos.forEach(arquivo => {
                return arquivo;
            });

            console.log(res.json(listemails))
        });


  }
}

export { FindEmailTransacionaisController }