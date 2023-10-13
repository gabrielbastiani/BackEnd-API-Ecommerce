-- CreateEnum
CREATE TYPE "StatusEmail" AS ENUM ('Sim', 'Nao');

-- CreateTable
CREATE TABLE "templatesorderemails" (
    "id" TEXT NOT NULL,
    "name_file_email" TEXT,
    "slug_name_file_email" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "templatesorderemails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "configsordersemail" (
    "id" TEXT NOT NULL,
    "status_order" TEXT,
    "templateOrderEmail_id" TEXT,
    "active" "StatusEmail" NOT NULL DEFAULT 'Nao',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "configsordersemail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "templatesorderemails_name_file_email_key" ON "templatesorderemails"("name_file_email");

-- AddForeignKey
ALTER TABLE "templatesorderemails" ADD CONSTRAINT "templatesorderemails_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configsordersemail" ADD CONSTRAINT "configsordersemail_templateOrderEmail_id_fkey" FOREIGN KEY ("templateOrderEmail_id") REFERENCES "templatesorderemails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configsordersemail" ADD CONSTRAINT "configsordersemail_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
