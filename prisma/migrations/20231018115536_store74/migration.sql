/*
  Warnings:

  - You are about to drop the column `cardholder_identification` on the `payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "cardholder_identification",
ADD COLUMN     "cardholder_cpfCnpj" TEXT,
ADD COLUMN     "cardholder_identification_cpfCnpj" TEXT,
ALTER COLUMN "expiration_month" SET DATA TYPE TEXT,
ALTER COLUMN "expiration_year" SET DATA TYPE TEXT;
