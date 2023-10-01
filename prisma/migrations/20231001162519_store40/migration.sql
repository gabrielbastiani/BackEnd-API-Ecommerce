/*
  Warnings:

  - You are about to drop the column `timeZone` on the `cartsabandoned` table. All the data in the column will be lost.
  - Made the column `created_cart` on table `cartsabandoned` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "cartsabandoned" DROP COLUMN "timeZone",
ALTER COLUMN "created_cart" SET NOT NULL,
ALTER COLUMN "created_cart" SET DATA TYPE TIMESTAMPTZ(3);
