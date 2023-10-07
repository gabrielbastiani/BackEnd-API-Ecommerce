-- CreateEnum
CREATE TYPE "StatusFilterCategorys" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusFilterAtributes" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusFilterPrice" AS ENUM ('Disponivel', 'Indisponivel');

-- AlterTable
ALTER TABLE "configsstore" ADD COLUMN     "filter_atributes" "StatusFilterAtributes" NOT NULL DEFAULT 'Disponivel',
ADD COLUMN     "filter_categorys" "StatusFilterCategorys" NOT NULL DEFAULT 'Disponivel',
ADD COLUMN     "filter_price" "StatusFilterPrice" NOT NULL DEFAULT 'Disponivel';
