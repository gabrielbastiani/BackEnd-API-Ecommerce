/*
  Warnings:

  - You are about to drop the column `nivel` on the `cartsabandoned` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cartsabandoned" DROP COLUMN "nivel";

-- AlterTable
ALTER TABLE "totaldaysabandonedcarts" ADD COLUMN     "lost_orders" INTEGER;
