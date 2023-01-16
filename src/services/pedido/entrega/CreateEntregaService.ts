import prismaClient from "../../../prisma";

interface EntregaRequest {
    tipo: string;
    custo: string;
    prazo: string;
    local: string;
    numero: string;
    complemento: string;
    bairro: string;
    CEP: string;
    cidade: string;
    estado: string;
    pedido_id: string;
    loja_id: string;
}

class CreateEntregaService {
    async execute({
        tipo,
        custo,
        prazo,
        local,
        numero,
        complemento,
        bairro,
        CEP,
        cidade,
        estado,
        pedido_id,
        loja_id,
    }: EntregaRequest) {

        const entrega = await prismaClient.entrega.create({
            data: {
                tipo: tipo,
                custo: custo,
                prazo: prazo,
                local: local,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                CEP: CEP,
                cidade: cidade,
                estado: estado,
                pedido_id: pedido_id,
                loja_id: loja_id
            },
            select: {
                id: true,
                custo: true,
                codigoRastreamento: true,
                status: true,
                prazo: true,
                local: true,
                numero: true,
                complemento: true,
                bairro: true,
                CEP: true,
                cidade: true,
                estado: true,
                pedido_id: true,
                created_at: true,
                loja_id: true,
            }
        })

        return entrega;

    }
}

export { CreateEntregaService }