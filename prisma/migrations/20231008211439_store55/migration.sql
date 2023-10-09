-- AlterTable
ALTER TABLE "countdowntimers" ADD COLUMN     "store_id" TEXT;

-- AddForeignKey
ALTER TABLE "countdowntimers" ADD CONSTRAINT "countdowntimers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
