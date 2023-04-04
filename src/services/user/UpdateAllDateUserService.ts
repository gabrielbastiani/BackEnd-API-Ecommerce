import { Role } from "@prisma/client";
import prismaClient from "../../prisma";

interface UserRequest {
    user_id: string;
    nameComplete: string;
    slug: string;
    email: string;
    cpf: string;
    cnpj: string;
    inscricaoEstadual: string;
    phone: string;
    dataNascimento: string;
    genero: string;
    newslatter: string;
    local: string;
    numero: string;
    complemento: string;
    bairro: string;
    CEP: string;
    cidade: string;
    estado: string;
    loja_id: string;
    authenticated: boolean;
}

class UpdateAllDateUserService {
    async execute({
        user_id,
        nameComplete,
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
        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const userName = await prismaClient.user.update({
            where: {
                id: String(user_id),
            },
            data: {
                nameComplete: nameComplete,
                slug: removerAcentos(nameComplete)
            }
        })

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

        const userRole = await prismaClient.user.update({
            where: {
                id: String(user_id)
            },
            data: {
                role: Role.ADMIN
            },
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

        // -- NEWSLETTERS --

        const updateNews = await prismaClient.user.findUnique({
            where: {
                id: String(user_id),
            },
            select: {
                newslatter: true,
            }
        })

        if (updateNews.newslatter === "Sim") {
            const newsSim = await prismaClient.user.update({
                where: {
                    id: String(user_id),
                },
                data: {
                    newslatter: "Nao",
                }
            })
            return newsSim;
        }

        if (updateNews.newslatter === "Nao") {
            const newsNao = await prismaClient.user.update({
                where: {
                    id: String(user_id),
                },
                data: {
                    newslatter: "Sim",
                }
            })
            return newsNao;
        }

        // -------------------- //

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

        const userAuth = await prismaClient.user.update({
            where: {
                id: String(user_id)
            },
            data: {
                authenticated: true
            },
        })

        return [
            userName,
            userEmail,
            userCpf,
            userRole,
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
            userLoja,
            userAuth
        ]

    }

}

export { UpdateAllDateUserService }