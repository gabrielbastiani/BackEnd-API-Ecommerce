/*
  Warnings:

  - You are about to drop the `configsstoreemails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `templatesstoresemail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "configsstoreemails" DROP CONSTRAINT "configsstoreemails_store_id_fkey";

-- DropForeignKey
ALTER TABLE "configsstoreemails" DROP CONSTRAINT "configsstoreemails_templateStoreEmail_id_fkey";

-- DropForeignKey
ALTER TABLE "templatesstoresemail" DROP CONSTRAINT "templatesstoresemail_store_id_fkey";

-- DropTable
DROP TABLE "configsstoreemails";

-- DropTable
DROP TABLE "templatesstoresemail";

-- CreateTable
CREATE TABLE "templatesstoresemails" (
    "id" TEXT NOT NULL,
    "name_file_email" TEXT,
    "slug_name_file_email" TEXT,
    "active" "StoreEmails" NOT NULL DEFAULT 'Nao',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "templatesstoresemails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "templatesstoresemails_name_file_email_key" ON "templatesstoresemails"("name_file_email");

-- AddForeignKey
ALTER TABLE "templatesstoresemails" ADD CONSTRAINT "templatesstoresemails_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
