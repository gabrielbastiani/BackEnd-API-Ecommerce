/*
  Warnings:

  - The `day` column on the `countdowntimers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `month` column on the `countdowntimers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `year` column on the `countdowntimers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hour` column on the `countdowntimers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `minute` column on the `countdowntimers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `second` column on the `countdowntimers` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "countdowntimers" DROP COLUMN "day",
ADD COLUMN     "day" INTEGER DEFAULT 31,
DROP COLUMN "month",
ADD COLUMN     "month" INTEGER DEFAULT 12,
DROP COLUMN "year",
ADD COLUMN     "year" INTEGER DEFAULT 3025,
DROP COLUMN "hour",
ADD COLUMN     "hour" INTEGER DEFAULT 23,
DROP COLUMN "minute",
ADD COLUMN     "minute" INTEGER DEFAULT 55,
DROP COLUMN "second",
ADD COLUMN     "second" INTEGER DEFAULT 20;
