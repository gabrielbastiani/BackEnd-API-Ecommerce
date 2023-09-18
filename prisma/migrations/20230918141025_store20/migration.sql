/*
  Warnings:

  - You are about to drop the column `customer_credit_card` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `installment_value` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `number_credit_card` on the `payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "customer_credit_card",
DROP COLUMN "installment_value",
DROP COLUMN "number_credit_card",
ADD COLUMN     "cardholder_name" TEXT,
ADD COLUMN     "date_created" TEXT,
ADD COLUMN     "expiration_month" INTEGER,
ADD COLUMN     "expiration_year" INTEGER,
ADD COLUMN     "first_number_credit_card" TEXT,
ADD COLUMN     "installment" INTEGER,
ADD COLUMN     "installment_amount" DOUBLE PRECISION,
ADD COLUMN     "last_number_credit_card" TEXT,
ADD COLUMN     "total_payment_juros" DOUBLE PRECISION;
