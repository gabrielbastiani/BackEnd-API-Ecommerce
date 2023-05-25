import prismaClient from "../../prisma";

interface StoreRequest {
  store_id: string;
  name: string;
  cnpj: string;
  email: string;
  phone: string;
  cellPhone: string;
  address: string;
  number: string;
  neighborhood: string;
  complement: string;
  cep: string;
  city: string;
  state: string;
}

class UpdateAllDateStoreService {
  async execute({
    store_id,
    name,
    cnpj,
    email,
    phone,
    cellPhone,
    address,
    number,
    neighborhood,
    complement,
    cep,
    city,
    state
  }: StoreRequest) {
    const updateStore = await prismaClient.store.update({
      where: {
        id: store_id
      },
      data: {
        name: name,
        cnpj: cnpj,
        email: email,
        phone: phone,
        cellPhone: cellPhone,
        address: address,
        number: number,
        neighborhood: neighborhood,
        complement: complement,
        cep: cep,
        city: city,
        state: state
      }
    })

    return updateStore;

  }
}

export { UpdateAllDateStoreService }