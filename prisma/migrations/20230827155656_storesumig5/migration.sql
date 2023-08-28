/*
  Warnings:

  - The `relationattributeproducts` column on the `carts` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "carts" DROP COLUMN "relationattributeproducts",
ADD COLUMN     "relationattributeproducts" JSONB;
