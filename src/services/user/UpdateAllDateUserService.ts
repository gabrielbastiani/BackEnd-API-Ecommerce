import prismaClient from "../../prisma";

interface UserRequest {
    user_id: any;
    email: string;
    cpf: string;
    cnpj: string;
    inscricaoEstadual: string;
    phone: string;
    dataNascimento: string;
    genero: string;
    local: string;
    numero: string;
    complemento: string;
    bairro: string;
    CEP: string;
    cidade: string;
    estado: string;
    loja_id: string;
}

class UpdateAllDateUserService {
    async execute({
        user_id,
        email,
        cpf,
        cnpj,
        inscricaoEstadual,
        phone,
        dataNascimento,
        genero,
        local,
        numero,
        complemento,
        bairro,
        CEP,
        cidade,
        estado,
        loja_id
    }: UserRequest) {

        const userEmail = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                email: email,
            }
        })

        const userCpf = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                cpf: cpf,
            }
        })

        const userCpnj = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                cnpj: cnpj,
            }
        })

        const userInscricaoEstadual = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                inscricaoEstadual: inscricaoEstadual,
            }
        })

        const userPhone = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                phone: phone,
            }
        })

        const userDataNascimento = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                dataNascimento: dataNascimento,
            }
        })

        const userGenero = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                genero: genero,
            }
        })

        const userLocal = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                local: local,
            }
        })

        const userNumero = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                numero: numero,
            }
        })

        const userComplemento = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                complemento: complemento,
            }
        })

        const userBairro = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                bairro: bairro,
            }
        })

        const userCep = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                CEP: CEP,
            }
        })

        const userCidade = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                cidade: cidade,
            }
        })

        const userEstado = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                estado: estado,
            }
        })

        const userLoja = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                loja_id: loja_id,
            }
        })

        return [
            userEmail,
            userCpf,
            userCpnj,
            userInscricaoEstadual,
            userPhone,
            userDataNascimento,
            userGenero,
            userLocal,
            userNumero,
            userComplemento,
            userBairro,
            userCep,
            userCidade,
            userEstado,
            userLoja
        ]

    }

}

export { UpdateAllDateUserService }