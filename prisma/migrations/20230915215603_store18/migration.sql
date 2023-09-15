/*
  Warnings:

  - You are about to drop the column `cart` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `cupom` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `order_data_delivery` on the `payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "cart",
DROP COLUMN "cupom",
DROP COLUMN "order_data_delivery";
