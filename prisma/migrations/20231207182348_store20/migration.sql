/*
  Warnings:

  - You are about to alter the column `visited` on the `visitedusers` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "visitedusers" ALTER COLUMN "visited" SET DATA TYPE INTEGER;
