import prismaClient from "../../prisma";

interface PagamentoRequest {
    valor: number;
    formaDePagamento: string;
    parcelas: string;
    status: string;
    ruaPagamento: string;
    numeroPagamento: string;
    bairroPagamento: string;
    complementoPagamento: string;
    cepPagamento: string;
    cityPagamento: string;
    statePagamento: string;
    nomeCompletoPagamento: string;
    codigoArea: string;
    phonePagamento: string;
    dataDeNascimento: string;
    credit_card_token: string;
    cpfPagamento: string;
    pedido_id: string;
    pagSeguroCode: string;
    loja_id: string;
    user_id: string;
}

class UpdatePagamentoService {
    async execute({
        valor,
        formaDePagamento,
        parcelas,
        status,
        ruaPagamento,
        numeroPagamento,
        bairroPagamento,
        complementoPagamento,
        cepPagamento,
        cityPagamento,
        statePagamento,
        nomeCompletoPagamento,
        codigoArea,
        phonePagamento,
        dataDeNascimento,
        credit_card_token,
        cpfPagamento,
        pedido_id,
        pagSeguroCode,
        loja_id,
        user_id,
    }: PagamentoRequest) {
        const pagamento = await prismaClient.pagamento.update({
            data: {
                valor: valor,
                formaDePagamento: formaDePagamento,
                parcelas: parcelas,
                status: status,
                ruaPagamento: ruaPagamento,
                numeroPagamento: numeroPagamento,
                bairroPagamento: bairroPagamento,
                complementoPagamento: complementoPagamento,
                cepPagamento: cepPagamento,
                cityPagamento: cityPagamento,
                statePagamento: statePagamento,
                nomeCompletoPagamento: nomeCompletoPagamento,
                codigoArea: codigoArea,
                phonePagamento: phonePagamento,
                dataDeNascimento: dataDeNascimento,
                credit_card_token: credit_card_token,
                cpfPagamento: cpfPagamento,
                pedido_id: pedido_id,
                pagSeguroCode: pagSeguroCode,
                loja_id: loja_id,
                user_id: user_id
            },
            select: {
                id: true,
                valor: true,
                formaDePagamento: true,
                parcelas: true,
                status: true,
                ruaPagamento: true,
                numeroPagamento: true,
                bairroPagamento: true,
                complementoPagamento: true,
                cepPagamento: true,
                cityPagamento: true,
                statePagamento: true,
                nomeCompletoPagamento: true,
                codigoArea: true,
                phonePagamento: true,
                dataDeNascimento: true,
                credit_card_token: true,
                cpfPagamento: true,
                pedido_id: true,
                pagSeguroCode: true,
                loja_id: true,
                user_id: true,
                created_at: true
            }
        })

        return (pagamento);

    }
}

export { UpdatePagamentoService }