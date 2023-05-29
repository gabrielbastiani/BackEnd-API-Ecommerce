import prismaClient from '../../prisma';
import xl from 'excel4node';
const wb = new xl.Workbook();
const ws = wb.addWorksheet('lista-das-newsletters');

class ExportContactService {
    async execute() {
        const findAll = await prismaClient.contact.findMany({
            select: {
                name: true,
                email: true,
                phone: true,
                company: true,
                sector: true,
                message: true,
                created_at: true
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        const headingColumnNames = [
            "Nome",
            "Email",
            "Telefone",
            "Empresa",
            "Setor",
            "Mensagem",
            "Data do Contato",
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

        return wb.write('ListagemDosContatos.xlsx');

    }
}

export { ExportContactService }