import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { nameComplete, email, password, cpfOrCnpj, inscricaoEstadual, phone, dataNascimento, genero, nomeDoRecebedor, address, cep } = req.body;

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
            nomeDoRecebedor,
            address,
            cep
        });

        return res.json(user)
    }
}

export { CreateUserController }