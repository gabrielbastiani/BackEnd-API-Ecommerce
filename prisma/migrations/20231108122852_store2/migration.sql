/*
  Warnings:

  - You are about to drop the column `status_order` on the `statusfretes` table. All the data in the column will be lost.
  - You are about to drop the column `status_order` on the `templatesfretesemails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "statusfretes" DROP COLUMN "status_order",
ADD COLUMN     "status_frete" TEXT;

-- AlterTable
ALTER TABLE "templatesfretesemails" DROP COLUMN "status_order",
ADD COLUMN     "status_frete" TEXT;
