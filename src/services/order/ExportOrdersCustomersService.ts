import prismaClient from '../../prisma'; 
import xl from 'excel4node';
const wb = new xl.Workbook();
const ws = wb.addWorksheet('lista-de-usuarios');


class ExportOrdersCustomersService {
    async execute() {
        const findAll = await prismaClient.order.findMany({
            select: {
                id_order_store: true,
                customer: true,
                deliveryAddressCustomer: true,
                data_delivery: true,
                payment: true,
                payment_id: true,
                store_cart_id: true,
                cupom: true,
                cart: true
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        const headingColumnNames = [
            "Num. Pedido",
            "Cliente",
            "Endereço Cliente",
            "Data para entrega",
            "Pagamento",
            "ID do Pagamento",
            "ID carrinho de compras",
            "Cupom de desconto",
            "Carrinho de compras",
        ]

        let headingColumnIndex = 1; //diz que começará na primeira linha
        headingColumnNames.forEach(heading => { //passa por todos itens do array
            // cria uma célula do tipo string para cada título
            ws.cell(1, headingColumnIndex++).string(heading);
        });

        let rowIndex = 2; //começa na linha 2
        findAll.forEach(record => { //passa por cada item do data
            let columnIndex = 1; //diz para começar na primeira coluna
            //transforma cada objeto em um array onde cada posição contém as chaves do objeto (name, email)
            Object.keys(record).forEach(columnName => {
                //cria uma coluna do tipo string para cada item
                ws.cell(rowIndex, columnIndex++)
                    .string(record[columnName])
            });
            rowIndex++; //incrementa o contador para ir para a próxima linha
        });

        return wb.write('ListagemDePedidos.xlsx');

    }
}

export { ExportOrdersCustomersService }