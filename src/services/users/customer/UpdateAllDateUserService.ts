import prismaClient from "../../prisma";

interface UserRequest {
    admin_id: any;
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
    store_id: string;
}

class UpdateAllDateUserService {
    async execute({
        admin_id,
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
        store_id
    }: UserRequest) {

        const updateUserDate = await prismaClient.user.update({
            where: {
                id: String(admin_id),
            },
            data: {
                email: email,
                cpf: cpf,
                cnpj: cnpj,
                inscricaoEstadual: inscricaoEstadual,
                phone: phone,
                dataNascimento: dataNascimento,
                genero: genero,
                local: local,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                CEP: CEP,
                cidade: cidade,
                estado: estado,
                store_id: store_id
            }
        })

        return updateUserDate;

    }

}

export { UpdateAllDateUserService }