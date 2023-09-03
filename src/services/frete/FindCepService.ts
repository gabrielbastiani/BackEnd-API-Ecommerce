const ApiNodeCorreios = require('node-correios');
const correios = new ApiNodeCorreios();

interface CepRequest {
    cep: string;
}

class FindCepService {
    async execute({ cep }: CepRequest) {
        const find = correios.consultaCEP({ cep: cep })
        
        return find
        
    }
}

export { FindCepService }