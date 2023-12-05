/*
  Warnings:

  - You are about to drop the `paymentstotalsstore` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "paymentstotalsstore" DROP CONSTRAINT "paymentstotalsstore_store_id_fkey";

-- DropTable
DROP TABLE "paymentstotalsstore";
