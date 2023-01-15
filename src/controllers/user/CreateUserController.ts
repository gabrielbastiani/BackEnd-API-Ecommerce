import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response) {
        const {
            nameComplete,
            email,
            password,
            cpfOrCnpj,
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
            loja_id
        } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            nameComplete,
            email,
            password,
            cpfOrCnpj,
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
            loja_id
        });

        return res.json(user)
    }
}

export { CreateUserController }