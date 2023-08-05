-- AlterTable
ALTER TABLE "cupomsproducts" ALTER COLUMN "product_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "cupomsproducts" ADD CONSTRAINT "cupomsproducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
