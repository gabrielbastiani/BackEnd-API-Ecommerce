import { Request, Response } from 'express'
import { CreateNewslettersService } from '../../services/newsletters/CreateNewslettersService'

class CreateNewslettersController {
  async handle(req: Request, res: Response){
    const { name, email, loja_id } = req.body;

    const createNews = new CreateNewslettersService();

    const news = await createNews.execute({
      name,
      email,
      loja_id
    });

    return res.json(news);

  }
}

export { CreateNewslettersController }