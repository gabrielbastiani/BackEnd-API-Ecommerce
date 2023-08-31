/*
  Warnings:

  - You are about to drop the column `email_customer` on the `carts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "carts" DROP COLUMN "email_customer";

-- AlterTable
ALTER TABLE "cartstotal" ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "cartstotalfinish" (
    "id" TEXT NOT NULL,
    "store_cart_id" TEXT,
    "totalCartFinish" DOUBLE PRECISION DEFAULT 0,
    "customer_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "cartstotalfinish_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cartstotalfinish" ADD CONSTRAINT "cartstotalfinish_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
