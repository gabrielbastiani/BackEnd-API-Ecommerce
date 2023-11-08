-- CreateEnum
CREATE TYPE "StatusEmailFrete" AS ENUM ('Sim', 'Nao');

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "freeShipping" SET DEFAULT 'Nao';

-- CreateTable
CREATE TABLE "statusfretes" (
    "id" TEXT NOT NULL,
    "order_id" TEXT,
    "status_order" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "statusfretes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "templatesfretesemails" (
    "id" TEXT NOT NULL,
    "status_order" TEXT,
    "subject" TEXT,
    "name_file_email" TEXT,
    "slug_name_file_email" TEXT,
    "active" "StatusEmailFrete" NOT NULL DEFAULT 'Nao',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "templatesfretesemails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "templatesfretesemails_name_file_email_key" ON "templatesfretesemails"("name_file_email");

-- AddForeignKey
ALTER TABLE "statusfretes" ADD CONSTRAINT "statusfretes_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statusfretes" ADD CONSTRAINT "statusfretes_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "templatesfretesemails" ADD CONSTRAINT "templatesfretesemails_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
