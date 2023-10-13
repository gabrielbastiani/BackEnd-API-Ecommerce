-- CreateEnum
CREATE TYPE "StoreEmails" AS ENUM ('Sim', 'Nao');

-- CreateTable
CREATE TABLE "templatesstoresemail" (
    "id" TEXT NOT NULL,
    "name_file_email" TEXT,
    "slug_name_file_email" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "templatesstoresemail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "configsstoreemails" (
    "id" TEXT NOT NULL,
    "item_store" TEXT,
    "templateStoreEmail_id" TEXT,
    "active" "StoreEmails" NOT NULL DEFAULT 'Nao',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "configsstoreemails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "templatesstoresemail_name_file_email_key" ON "templatesstoresemail"("name_file_email");

-- AddForeignKey
ALTER TABLE "templatesstoresemail" ADD CONSTRAINT "templatesstoresemail_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configsstoreemails" ADD CONSTRAINT "configsstoreemails_templateStoreEmail_id_fkey" FOREIGN KEY ("templateStoreEmail_id") REFERENCES "templatesstoresemail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configsstoreemails" ADD CONSTRAINT "configsstoreemails_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
