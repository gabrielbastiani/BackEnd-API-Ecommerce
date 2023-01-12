import prismaClient from '../../prisma';
import xl from 'excel4node';
const wb = new xl.Workbook();
const ws = wb.addWorksheet('lista-de-produtos');


class ExportProductService {
    async execute() {
        const findAll = await prismaClient.product.findMany({
            select: {
                id: true,
                nameProduct: true,
                descriptionProduct1: true,
                descriptionProduct2: true,
                descriptionProduct3: true,
                descriptionProduct4: true,
                descriptionProduct5: true,
                descriptionProduct6: true,
                price: true,
                sku: true,
                estoque: true,
                pesoKG: true,
                larguraCM: true,
                alturaCM: true,
                profundidadeCM: true,
                promocao: true,
                category_id: true,
                loja_id: true,
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        const headingColumnNames = [
            "ID do Produto",
            "Nome do Produto",
            "Primeira Descrição",
            "Segunda Descrição",
            "Terceira Descrição",
            "Quarta Descrição",
            "Quinta Descrição",
            "Sexta Descrição",
            "Preço do Produto",
            "SKU do Produto",
            "Estoque do Produto",
            "Peso do Produto",
            "Largura do Produto",
            "Altura do Produto",
            "Profundidade do Produto",
            "Promoção do Produto",
            "Categoria do Produto",
            "Loja do Produto"
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

        return wb.write('ListagemDeProdutosDaLojaVirtual.xlsx');

    }
}

export { ExportProductService }