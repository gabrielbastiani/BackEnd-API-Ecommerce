-- CreateEnum
CREATE TYPE "StatusEmailOrder" AS ENUM ('Sim', 'Nao');

-- CreateTable
CREATE TABLE "templatestatusorderemail" (
    "id" TEXT NOT NULL,
    "status_order" TEXT,
    "subject" TEXT,
    "name_file_email" TEXT,
    "slug_name_file_email" TEXT,
    "active" "StatusEmailOrder" NOT NULL DEFAULT 'Nao',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "templatestatusorderemail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "templatestatusorderemail_name_file_email_key" ON "templatestatusorderemail"("name_file_email");

-- AddForeignKey
ALTER TABLE "templatestatusorderemail" ADD CONSTRAINT "templatestatusorderemail_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
