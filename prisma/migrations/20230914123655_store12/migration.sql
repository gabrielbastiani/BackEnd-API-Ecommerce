/*
  Warnings:

  - You are about to drop the column `codigo` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `id_venda` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cartstotal" ADD COLUMN     "data_cart_products" JSONB;

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "codigo",
DROP COLUMN "email",
DROP COLUMN "id_venda",
DROP COLUMN "name",
DROP COLUMN "status",
ADD COLUMN     "customer_credit_card" TEXT,
ADD COLUMN     "customer_id" TEXT,
ADD COLUMN     "flag_credit_card" TEXT,
ADD COLUMN     "installment_value" TEXT,
ADD COLUMN     "key_payment_pix" TEXT,
ADD COLUMN     "key_valid_pix" TEXT DEFAULT '01/01/3075 00:00',
ADD COLUMN     "number_credit_card" TEXT,
ADD COLUMN     "qr_code_pix" TEXT,
ADD COLUMN     "total_payment" DOUBLE PRECISION,
ADD COLUMN     "transaction_id" TEXT,
ADD COLUMN     "type_payment" VARCHAR(525);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT,
    "deliveryAddressCustomer_id" TEXT,
    "data_delivery" TEXT,
    "payment_id" TEXT,
    "store_cart_id" TEXT,
    "cupom" TEXT,
    "cart" JSONB,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipmentstrackings" (
    "id" TEXT NOT NULL,
    "order_id" TEXT,
    "code_tracking" TEXT,
    "delivery_history" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "shipmentstrackings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ordercomments" (
    "id" TEXT NOT NULL,
    "order_id" TEXT,
    "admin_or_employee" VARCHAR(155),
    "comment" VARCHAR(8555) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "ordercomments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_deliveryAddressCustomer_id_fkey" FOREIGN KEY ("deliveryAddressCustomer_id") REFERENCES "deliveryaddresscustomers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipmentstrackings" ADD CONSTRAINT "shipmentstrackings_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordercomments" ADD CONSTRAINT "ordercomments_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
