/*
  Warnings:

  - You are about to drop the `statusfretes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "statusfretes" DROP CONSTRAINT "statusfretes_order_id_fkey";

-- DropForeignKey
ALTER TABLE "statusfretes" DROP CONSTRAINT "statusfretes_store_id_fkey";

-- AlterTable
ALTER TABLE "shipmentstrackings" ADD COLUMN     "status_frete" TEXT;

-- DropTable
DROP TABLE "statusfretes";
