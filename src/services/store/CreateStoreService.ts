import prismaClient from "../../prisma";

interface StoreRequest {
  logo: string;
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

class CreateStoreService {
  async execute({
    logo,
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
    const store = await prismaClient.store.create({
      data: {
        logo: logo,
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
    });

    const storeFirst = await prismaClient.store.findFirst();

    await prismaClient.notificationAdmin.create({
      data: {
        message: `Loja <strong>${storeFirst.name}</strong> foi criada com sucesso.`,
        store_id: storeFirst.id
      }
    });

    await prismaClient.configStore.create({
      data: {
        store_id: storeFirst.id
      }
    });

    await prismaClient.countdownTimer.create({
      data: {
        store_id: storeFirst.id
      }
    });

    return store;

  }
}

export { CreateStoreService }