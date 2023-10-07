-- CreateEnum
CREATE TYPE "StatusRecentProductsViews" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusPaymentPix" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusPaymentBoleto" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusPaymentCartao" AS ENUM ('Disponivel', 'Indisponivel');

-- AlterTable
ALTER TABLE "configsstore" ADD COLUMN     "payment_boleto" "StatusPaymentBoleto" NOT NULL DEFAULT 'Disponivel',
ADD COLUMN     "payment_cartao" "StatusPaymentCartao" NOT NULL DEFAULT 'Disponivel',
ADD COLUMN     "payment_pix" "StatusPaymentPix" NOT NULL DEFAULT 'Disponivel',
ADD COLUMN     "recent_products_views" "StatusRecentProductsViews" NOT NULL DEFAULT 'Disponivel';
