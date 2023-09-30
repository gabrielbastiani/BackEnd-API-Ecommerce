/*
  Warnings:

  - The `time_send_email` column on the `configcartsabandoned` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "configcartsabandoned" DROP COLUMN "time_send_email",
ADD COLUMN     "time_send_email" INTEGER;
