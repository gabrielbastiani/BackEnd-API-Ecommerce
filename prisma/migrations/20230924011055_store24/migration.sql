-- CreateEnum
CREATE TYPE "StatusCart" AS ENUM ('Sim', 'Nao');

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "reservedAmount" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "cartsabandoned" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "customer_id" TEXT,
    "store_cart_id" TEXT,
    "cart_abandoned" JSONB,

    CONSTRAINT "cartsabandoned_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "configcartsabandoned" (
    "id" TEXT NOT NULL,
    "time_send_email" TEXT DEFAULT '01/01/5075 00:00',
    "subject" TEXT,
    "code_cupom" TEXT,
    "template" TEXT,
    "active" "StatusCart" NOT NULL DEFAULT 'Nao',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "configcartsabandoned_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sendemailsabandonedacarts" (
    "id" TEXT NOT NULL,
    "configAbandonedCart_id" TEXT,
    "abandoned_cart_email" JSONB,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sendemailsabandonedacarts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cartsabandoned" ADD CONSTRAINT "cartsabandoned_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configcartsabandoned" ADD CONSTRAINT "configcartsabandoned_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sendemailsabandonedacarts" ADD CONSTRAINT "sendemailsabandonedacarts_configAbandonedCart_id_fkey" FOREIGN KEY ("configAbandonedCart_id") REFERENCES "configcartsabandoned"("id") ON DELETE SET NULL ON UPDATE CASCADE;
