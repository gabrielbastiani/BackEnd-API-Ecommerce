/*
  Warnings:

  - You are about to drop the column `emails` on the `configcartsabandoned` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cartsabandoned" ADD COLUMN     "email_customer" TEXT,
ADD COLUMN     "status" INTEGER;

-- AlterTable
ALTER TABLE "configcartsabandoned" DROP COLUMN "emails";
