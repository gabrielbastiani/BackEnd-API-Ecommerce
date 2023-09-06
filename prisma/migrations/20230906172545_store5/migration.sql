/*
  Warnings:

  - You are about to drop the column `cep` on the `carts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "carts" DROP COLUMN "cep";

-- AlterTable
ALTER TABLE "cartstotal" ADD COLUMN     "cep" VARCHAR(125);
