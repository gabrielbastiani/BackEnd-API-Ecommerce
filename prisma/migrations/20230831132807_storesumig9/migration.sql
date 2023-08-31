-- AlterTable
ALTER TABLE "cartstotal" ADD COLUMN     "customer_id" TEXT;

-- AddForeignKey
ALTER TABLE "cartstotal" ADD CONSTRAINT "cartstotal_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
