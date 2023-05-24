import { Request, Response } from 'express'
import { CreateContatoService } from '../../services/contatos/CreateContatoService'

class CreateContatoController {
  async handle(req: Request, res: Response){
    const { name, email, phone, empresa, setor, mensagem, store_id } = req.body;

    const createContato = new CreateContatoService();

    const contatos = await createContato.execute({
      name,
      email,
      phone,
      empresa,
      setor,
      mensagem,
      store_id
    });

    return res.json(contatos);

  }
}

export { CreateContatoController }