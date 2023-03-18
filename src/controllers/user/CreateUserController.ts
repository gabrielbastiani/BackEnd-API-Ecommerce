import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response) {
        const {
            nameComplete,
            email,
            password,
            cpf,
            cnpj,
            inscricaoEstadual,
            phone,
            dataNascimento,
            genero,
            newslatter,
            local,
            numero,
            complemento,
            bairro,
            CEP,
            cidade,
            estado,
            loja_id,
            authenticated
        } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            nameComplete,
            email,
            password,
            cpf,
            cnpj,
            inscricaoEstadual,
            phone,
            dataNascimento,
            genero,
            newslatter,
            local,
            numero,
            complemento,
            bairro,
            CEP,
            cidade,
            estado,
            loja_id,
            authenticated
        });

        return res.json(user)
    }
}

export { CreateUserController }