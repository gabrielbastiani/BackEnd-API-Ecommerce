/*
  Warnings:

  - You are about to drop the column `cardholder_email` on the `payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "cardholder_email",
ADD COLUMN     "cardholder_identification" JSONB;
