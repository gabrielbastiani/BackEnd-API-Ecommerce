-- CreateEnum
CREATE TYPE "StatusOfferProduct" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusEmphasisProduct" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusTendenceProduct" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusNewsllaters" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusChatIa" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusSearchBar" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusCupomInCart" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusCupomInPayment" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusServiceInHeader" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusCreditsCustomerInMenu" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusDigitalProductsCustomerInMenu" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateTable
CREATE TABLE "configsstore" (
    "id" TEXT NOT NULL,
    "offer_products" "StatusOfferProduct" NOT NULL DEFAULT 'Disponivel',
    "emphasis_products" "StatusEmphasisProduct" NOT NULL DEFAULT 'Disponivel',
    "tendence_product" "StatusTendenceProduct" NOT NULL DEFAULT 'Disponivel',
    "newsllaters_section" "StatusNewsllaters" NOT NULL DEFAULT 'Disponivel',
    "chat_ia" "StatusChatIa" NOT NULL DEFAULT 'Disponivel',
    "search_bar" "StatusSearchBar" NOT NULL DEFAULT 'Disponivel',
    "cupom_in_cart" "StatusCupomInCart" NOT NULL DEFAULT 'Disponivel',
    "cupom_in_payment" "StatusCupomInPayment" NOT NULL DEFAULT 'Disponivel',
    "service_in_header" "StatusServiceInHeader" NOT NULL DEFAULT 'Disponivel',
    "credits_customer_in_menu" "StatusCreditsCustomerInMenu" NOT NULL DEFAULT 'Disponivel',
    "digital_products_customer_in_menu" "StatusDigitalProductsCustomerInMenu" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "configsstore_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "configsstore" ADD CONSTRAINT "configsstore_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
