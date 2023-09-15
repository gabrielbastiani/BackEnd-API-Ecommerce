-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "cart" JSONB,
ADD COLUMN     "cupom" TEXT,
ADD COLUMN     "order_data_delivery" TEXT,
ADD COLUMN     "store_cart_id" TEXT;
