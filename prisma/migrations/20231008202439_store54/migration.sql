/*
  Warnings:

  - You are about to drop the column `created_at` on the `configsstore` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `configsstore` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "StatusCountdownTimer" AS ENUM ('Disponivel', 'Indisponivel');

-- AlterTable
ALTER TABLE "configsstore" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "count_down_timer" "StatusCountdownTimer" NOT NULL DEFAULT 'Disponivel';

-- CreateTable
CREATE TABLE "countdowntimers" (
    "id" TEXT NOT NULL,
    "text_promotion" VARCHAR(300),
    "text_button" VARCHAR(10),
    "day" VARCHAR(10),
    "month" VARCHAR(10),
    "year" VARCHAR(10),
    "hour" VARCHAR(10),
    "minute" VARCHAR(10),
    "second" VARCHAR(10),

    CONSTRAINT "countdowntimers_pkey" PRIMARY KEY ("id")
);
