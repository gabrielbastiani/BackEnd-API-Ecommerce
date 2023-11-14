/*
  Warnings:

  - You are about to drop the `templatestatusorderemail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "templatestatusorderemail" DROP CONSTRAINT "templatestatusorderemail_store_id_fkey";

-- DropTable
DROP TABLE "templatestatusorderemail";

-- DropEnum
DROP TYPE "StatusEmailOrder";
