-- CreateEnum
CREATE TYPE "SelectedDelivery" AS ENUM ('Sim', 'Nao');

-- AlterTable
ALTER TABLE "deliveryaddresscustomers" ADD COLUMN     "deliverySelected" "SelectedDelivery" NOT NULL DEFAULT 'Sim';
