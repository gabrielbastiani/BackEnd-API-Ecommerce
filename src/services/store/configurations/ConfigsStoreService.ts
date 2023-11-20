import prismaClient from "../../../prisma";

interface ConfigRequest {
    statusUpdate: string;
}

class ConfigsStoreService {
    async execute({ statusUpdate }: ConfigRequest) {

        const store = await prismaClient.store.findFirst();
        const configDate = await prismaClient.configStore.findFirst();

        // offer_products
        if (statusUpdate === "offer_products") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    offer_products: configDate.offer_products === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Carrossel de produtos em oferta se encontra <strong>${configDate.offer_products === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> no front-end da loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // emphasis_products

        if (statusUpdate === "emphasis_products") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    emphasis_products: configDate.emphasis_products === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Carrossel de produtos em destaque se encontra <strong>${configDate.emphasis_products === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> no front-end da loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // chat_ia

        if (statusUpdate === "chat_ia") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    chat_ia: configDate.chat_ia === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Função de inteligencia artificial se encontra <strong>${configDate.chat_ia === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> no front-end da loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // credits_customer_in_menu

        if (statusUpdate === "credits_customer_in_menu") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    credits_customer_in_menu: configDate.credits_customer_in_menu === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Menu de crédito para o cliente se encontra <strong>${configDate.credits_customer_in_menu === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> para os clientes.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // cupom_in_cart

        if (statusUpdate === "cupom_in_cart") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    cupom_in_cart: configDate.cupom_in_cart === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Campo de cupom de desconto no carrinho de compras se encontra <strong>${configDate.cupom_in_cart === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> na loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // cupom_in_payment

        if (statusUpdate === "cupom_in_payment") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    cupom_in_payment: configDate.cupom_in_payment === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Campo de cupom de desconto na página de pagamento se encontra <strong>${configDate.cupom_in_payment === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> na loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // digital_products_customer_in_menu

        if (statusUpdate === "digital_products_customer_in_menu") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    digital_products_customer_in_menu: configDate.digital_products_customer_in_menu === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Menu de produtos digitais se encontra <strong>${configDate.digital_products_customer_in_menu === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> para os clientes.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // newsllaters_section

        if (statusUpdate === "newsllaters_section") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    newsllaters_section: configDate.newsllaters_section === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Seção de newsllaters se encontra <strong>${configDate.newsllaters_section === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> no front-end da loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // search_bar

        if (statusUpdate === "search_bar") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    search_bar: configDate.search_bar === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Campo de pesquisa de produtos se encontra <strong>${configDate.search_bar === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> no header da loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // service_in_header

        if (statusUpdate === "service_in_header") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    service_in_header: configDate.service_in_header === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Função de atendimento se encontra <strong>${configDate.service_in_header === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> no header da loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // tendence_product

        if (statusUpdate === "tendence_product") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    tendence_product: configDate.tendence_product === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Produtos em tendencias se encontra <strong>${configDate.tendence_product === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> na loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // recent_products_views

        if (statusUpdate === "recent_products_views") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    recent_products_views: configDate.recent_products_views === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Carrossel de produtos recem vizualizados se encontra <strong>${configDate.recent_products_views === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> na loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // payment_pix

        if (statusUpdate === "payment_pix") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    payment_pix: configDate.payment_pix === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Método de pagamento <strong>PIX</strong> se encontra <strong>${configDate.payment_pix === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> na loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // payment_boleto

        if (statusUpdate === "payment_boleto") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    payment_boleto: configDate.payment_boleto === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Método de pagamento <strong>BOLETO BANCARIO</strong> se encontra <strong>${configDate.payment_boleto === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> na loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // payment_cartao

        if (statusUpdate === "payment_cartao") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    payment_cartao: configDate.payment_cartao === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Método de pagamento <strong>CARTÃO DE CRÉDITO</strong> se encontra <strong>${configDate.payment_cartao === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> na loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // filter_categorys

        if (statusUpdate === "filter_categorys") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    filter_categorys: configDate.filter_categorys === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Filtragem por <strong>CATEGORIAS</strong> se encontra <strong>${configDate.filter_categorys === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> na loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // filter_atributes

        if (statusUpdate === "filter_atributes") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    filter_atributes: configDate.filter_atributes === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Filtragem por <strong>ATRIBUTOS</strong> se encontra <strong>${configDate.filter_atributes === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> na loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // filter_price

        if (statusUpdate === "filter_price") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    filter_price: configDate.filter_price === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Filtragem por <strong>PREÇOS</strong> se encontra <strong>${configDate.filter_price === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> na loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // count_down_timer

        if (statusUpdate === "count_down_timer") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    count_down_timer: configDate.count_down_timer === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Contador regressivo se encontra <strong>${configDate.count_down_timer === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> na loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

        // chat_whatsapp

        if (statusUpdate === "chat_whatsapp") {
            await prismaClient.configStore.update({
                where: {
                    id: configDate.id
                },
                data: {
                    chat_whatsapp: configDate.chat_whatsapp === "Disponivel" ? "Indisponivel" : "Disponivel"
                }
            });

            await prismaClient.notificationAdmin.create({
                data: {
                    message: `Chat Whatsapp se encontra <strong>${configDate.chat_whatsapp === "Disponivel" ? "Indisponivel" : "Disponivel"}</strong> na loja.`,
                    link: `http://localhost:3000/configuracoes/loja`,
                    store_id: store.id
                }
            });

            return;
        }

    }
}

export { ConfigsStoreService }