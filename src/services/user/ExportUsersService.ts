import prismaClient from '../../prisma';
import xl from 'excel4node';
const wb = new xl.Workbook();
const ws = wb.addWorksheet('lista-de-usuarios');


class ExportUsersService {
    async execute() {
        const findAll = await prismaClient.user.findMany({
            select: {
                id: true,
                nameComplete: true,
                email: true,
                cpfOrCnpj: true,
                inscricaoEstadual: true,
                phone: true,
                dataNascimento: true,
                genero: true,
                rua: true,
                numero: true,
                bairro: true,
                complemento: true,
                cep: true,
                city: true,
                state: true,
                loja_id: true,
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        const headingColumnNames = [
            "ID do Usuario",
            "Nome Completo",
            "Email",
            "CPF ou CNPJ",
            "Inscrição Estadual",
            "Telefone",
            "Data de Nascimento",
            "Genero",
            "Rua",
            "Numero",
            "Bairro",
            "Complemento",
            "CEP",
            "Cidade",
            "Estado",
            "ID Loja",
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

        return wb.write('ListagemDeClientesDaLojaVirtual.xlsx');

    }
}

export { ExportUsersService }