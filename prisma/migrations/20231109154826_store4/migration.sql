/*
  Warnings:

  - You are about to drop the column `code_tracking` on the `shipmentstrackings` table. All the data in the column will be lost.
  - You are about to drop the column `name_transport` on the `shipmentstrackings` table. All the data in the column will be lost.
  - You are about to drop the column `status_frete` on the `shipmentstrackings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "shipmentstrackings" DROP COLUMN "code_tracking",
DROP COLUMN "name_transport",
DROP COLUMN "status_frete",
ADD COLUMN     "store_id" TEXT;

-- CreateTable
CREATE TABLE "trackings" (
    "id" TEXT NOT NULL,
    "shippingTracking_id" TEXT,
    "status_frete" TEXT,
    "name_transport" TEXT,
    "code_tracking" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "trackings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "shipmentstrackings" ADD CONSTRAINT "shipmentstrackings_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trackings" ADD CONSTRAINT "trackings_shippingTracking_id_fkey" FOREIGN KEY ("shippingTracking_id") REFERENCES "shipmentstrackings"("id") ON DELETE SET NULL ON UPDATE CASCADE;
