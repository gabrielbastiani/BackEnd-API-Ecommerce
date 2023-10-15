/*
  Warnings:

  - You are about to drop the `configsordersemail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "configsordersemail" DROP CONSTRAINT "configsordersemail_store_id_fkey";

-- DropForeignKey
ALTER TABLE "configsordersemail" DROP CONSTRAINT "configsordersemail_templateOrderEmail_id_fkey";

-- AlterTable
ALTER TABLE "templatesorderemails" ADD COLUMN     "active" "StatusEmail" NOT NULL DEFAULT 'Nao',
ADD COLUMN     "status_order" TEXT,
ADD COLUMN     "subject" TEXT;

-- DropTable
DROP TABLE "configsordersemail";
