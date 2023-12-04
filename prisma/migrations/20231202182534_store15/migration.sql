-- DropForeignKey
ALTER TABLE "avalietions" DROP CONSTRAINT "avalietions_customer_id_fkey";

-- AlterTable
ALTER TABLE "avalietions" ALTER COLUMN "customer_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "avalietions" ADD CONSTRAINT "avalietions_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
