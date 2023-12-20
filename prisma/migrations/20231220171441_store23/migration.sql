/*
  Warnings:

  - You are about to drop the column `qtd_type_boleto` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `qtd_type_cartao` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `qtd_type_pix` on the `payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "qtd_type_boleto",
DROP COLUMN "qtd_type_cartao",
DROP COLUMN "qtd_type_pix";

-- CreateTable
CREATE TABLE "typepayments" (
    "id" TEXT NOT NULL,
    "qtd_type_boleto" INTEGER,
    "qtd_type_pix" INTEGER,
    "qtd_type_cartao" INTEGER,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "typepayments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "typepayments" ADD CONSTRAINT "typepayments_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
