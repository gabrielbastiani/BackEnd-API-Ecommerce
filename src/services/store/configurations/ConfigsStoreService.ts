import prismaClient from "../../../prisma";

interface ConfigRequest {
    statusUpdate: string;
}

class ConfigsStoreService {
    async execute({ statusUpdate }: ConfigRequest) {

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

            return;
        }

    }
}

export { ConfigsStoreService }