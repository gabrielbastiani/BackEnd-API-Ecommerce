-- AlterTable
ALTER TABLE "cartstotal" ADD COLUMN     "new_subTotal" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "new_value_products" JSONB;
