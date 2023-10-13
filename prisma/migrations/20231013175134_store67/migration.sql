/*
  Warnings:

  - You are about to drop the column `delivery_history` on the `shipmentstrackings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "shipmentstrackings" DROP COLUMN "delivery_history",
ADD COLUMN     "name_transport" TEXT;

-- CreateTable
CREATE TABLE "statusorders" (
    "id" TEXT NOT NULL,
    "order_id" TEXT,
    "status_order" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "statusorders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "statusorders" ADD CONSTRAINT "statusorders_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statusorders" ADD CONSTRAINT "statusorders_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
