import prismaClient from "../../../prisma";

interface CustomerRequest {
    customer_id: string;
    email: string;
    password: string;
    cpf: string;
    cnpj: string;
    stateRegistration: string;
    phone: string;
    dateOfBirth: string;
    gender: string;
    newslatter: string;
    address: string;
    number: string;
    complement: string;
    neighborhood: string;
    cep: string;
    city: string;
    state: string;
    store_id: string;
}

class UpdateAllDateCustomerService {
    async execute({
        customer_id,
        email,
        password,
        cpf,
        cnpj,
        stateRegistration,
        phone,
        dateOfBirth,
        gender,
        newslatter,
        address,
        number,
        complement,
        neighborhood,
        cep,
        city,
        state,
        store_id
    }: CustomerRequest) {

        const updateCustomer = await prismaClient.customer.update({
            where: {
                id: customer_id,
            },
            data: {
                email: email,
                password: password,
                cpf: cpf,
                cnpj: cnpj,
                stateRegistration: stateRegistration,
                phone: phone,
                dateOfBirth: dateOfBirth,
                gender: gender,
                newslatter: newslatter,
                address: address,
                number: number,
                complement: complement,
                neighborhood: neighborhood,
                cep: cep,
                city: city,
                state: state,
                store_id: store_id
            }
        })

        return updateCustomer;

    }

}

export { UpdateAllDateCustomerService }