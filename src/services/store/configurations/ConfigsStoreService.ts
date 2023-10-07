
import {
    StatusChatIa,
    StatusCreditsCustomerInMenu,
    StatusCupomInCart,
    StatusCupomInPayment,
    StatusDigitalProductsCustomerInMenu,
    StatusEmphasisProduct,
    StatusNewsllaters,
    StatusOfferProduct,
    StatusSearchBar,
    StatusServiceInHeader,
    StatusTendenceProduct
} from "@prisma/client";
import prismaClient from "../../../prisma";

interface ConfigRequest {
    configStore_id: string;
}

class ConfigsStoreService {
    async execute({ configStore_id }: ConfigRequest) {
        const active = await prismaClient.configStore.findUnique({
            where: {
                id: configStore_id
            }
        });

        // offer_products

        if (active.offer_products === "Disponivel") {
            const isFalseOffer = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    offer_products: StatusOfferProduct.Indisponivel
                }
            });

            return isFalseOffer;
        }

        if (active.offer_products === "Indisponivel") {
            const isTrueOffer = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    offer_products: StatusOfferProduct.Disponivel
                }
            });

            return isTrueOffer;

        }

        // emphasis

        if (active.emphasis_products === "Disponivel") {
            const isFalseEmphasis = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    emphasis_products: StatusEmphasisProduct.Indisponivel
                }
            });

            return isFalseEmphasis;
        }

        if (active.emphasis_products === "Indisponivel") {
            const isTrueEmphasis = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    emphasis_products: StatusEmphasisProduct.Disponivel
                }
            });

            return isTrueEmphasis;

        }

        // tendence_product

        if (active.tendence_product === "Disponivel") {
            const isFalseTendence = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    tendence_product: StatusTendenceProduct.Indisponivel
                }
            });

            return isFalseTendence;
        }

        if (active.tendence_product === "Indisponivel") {
            const isTrueTendence = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    tendence_product: StatusTendenceProduct.Disponivel
                }
            });

            return isTrueTendence;

        }

        // newsllaters_section

        if (active.newsllaters_section === "Disponivel") {
            const isFalseNewsllaters = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    newsllaters_section: StatusNewsllaters.Indisponivel
                }
            });

            return isFalseNewsllaters;
        }

        if (active.newsllaters_section === "Indisponivel") {
            const isTrueNewsllaters = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    newsllaters_section: StatusNewsllaters.Disponivel
                }
            });

            return isTrueNewsllaters;

        }

        // chat_ia

        if (active.chat_ia === "Disponivel") {
            const isFalseChatIa = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    chat_ia: StatusChatIa.Indisponivel
                }
            });

            return isFalseChatIa;
        }

        if (active.chat_ia === "Indisponivel") {
            const isTrueChatIa = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    chat_ia: StatusChatIa.Disponivel
                }
            });

            return isTrueChatIa;

        }

        // search_bar

        if (active.search_bar === "Disponivel") {
            const isFalseSearchBar = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    search_bar: StatusSearchBar.Indisponivel
                }
            });

            return isFalseSearchBar;
        }

        if (active.search_bar === "Indisponivel") {
            const isTrueSearchBar = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    search_bar: StatusSearchBar.Disponivel
                }
            });

            return isTrueSearchBar;

        }

        // cupom_in_cart

        if (active.cupom_in_cart === "Disponivel") {
            const isFalseCupomInCart = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    cupom_in_cart: StatusCupomInCart.Indisponivel
                }
            });

            return isFalseCupomInCart;
        }

        if (active.cupom_in_cart === "Indisponivel") {
            const isTrueCupomInCart = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    cupom_in_cart: StatusCupomInCart.Disponivel
                }
            });

            return isTrueCupomInCart;

        }

        // cupom_in_payment

        if (active.cupom_in_payment === "Disponivel") {
            const isFalseCupomInPayment = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    cupom_in_payment: StatusCupomInPayment.Indisponivel
                }
            });

            return isFalseCupomInPayment;
        }

        if (active.cupom_in_payment === "Indisponivel") {
            const isTrueCupomInPayment = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    cupom_in_payment: StatusCupomInPayment.Disponivel
                }
            });

            return isTrueCupomInPayment;

        }

        // service_in_header

        if (active.service_in_header === "Disponivel") {
            const isFalseServiceInHeader = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    service_in_header: StatusServiceInHeader.Indisponivel
                }
            });

            return isFalseServiceInHeader;
        }

        if (active.service_in_header === "Indisponivel") {
            const isTrueServiceInHeader = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    service_in_header: StatusServiceInHeader.Disponivel
                }
            });

            return isTrueServiceInHeader;

        }

        // credits_customer_in_menu

        if (active.credits_customer_in_menu === "Disponivel") {
            const isFalseCredits = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    credits_customer_in_menu: StatusCreditsCustomerInMenu.Indisponivel
                }
            });

            return isFalseCredits;
        }

        if (active.credits_customer_in_menu === "Indisponivel") {
            const isTrueCredits = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    credits_customer_in_menu: StatusCreditsCustomerInMenu.Disponivel
                }
            });

            return isTrueCredits;

        }

        // digital_products_customer_in_menu

        if (active.digital_products_customer_in_menu === "Disponivel") {
            const isFalseDigital = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    digital_products_customer_in_menu: StatusDigitalProductsCustomerInMenu.Indisponivel
                }
            });

            return isFalseDigital;
        }

        if (active.digital_products_customer_in_menu === "Indisponivel") {
            const isTrueDigital = await prismaClient.configStore.update({
                where: {
                    id: configStore_id
                },
                data: {
                    digital_products_customer_in_menu: StatusDigitalProductsCustomerInMenu.Disponivel
                }
            });

            return isTrueDigital;

        }

    }
}

export { ConfigsStoreService }