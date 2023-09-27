/*
  Warnings:

  - You are about to drop the column `slug` on the `cartsabandoned` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cartsabandoned" DROP COLUMN "slug",
ADD COLUMN     "slug_day" TEXT;

-- AlterTable
ALTER TABLE "totaldaysabandonedcarts" ADD COLUMN     "slug_day" TEXT;
