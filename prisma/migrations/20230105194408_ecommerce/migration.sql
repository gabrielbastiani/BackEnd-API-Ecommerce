-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "nameComplete" VARCHAR(95) NOT NULL,
    "email" VARCHAR(80) NOT NULL,
    "password" TEXT NOT NULL,
    "cpfOrCnpj" VARCHAR(25),
    "inscricaoEstadual" VARCHAR(55),
    "phone" VARCHAR(35),
    "dataNascimento" VARCHAR(25),
    "genero" VARCHAR(35),
    "newslatter" BOOLEAN NOT NULL DEFAULT false,
    "nomeDoRecebedor" VARCHAR(95),
    "address" VARCHAR(405),
    "cep" VARCHAR(25),
    "city" VARCHAR(185),
    "state" VARCHAR(155),
    "pais" VARCHAR(25),
    "authenticated" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passwordRecoverys" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "passwordRecoverys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "categoryName" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "nameProduct" VARCHAR(225) NOT NULL,
    "descriptionProduct1" VARCHAR(725),
    "descriptionProduct2" VARCHAR(725),
    "descriptionProduct3" VARCHAR(725),
    "descriptionProduct4" VARCHAR(725),
    "descriptionProduct5" VARCHAR(725),
    "descriptionProduct6" VARCHAR(725),
    "price" INTEGER DEFAULT 0,
    "sku" VARCHAR(25),
    "estoque" INTEGER DEFAULT 0,
    "quantidade" INTEGER DEFAULT 0,
    "avaliacao" VARCHAR(15),
    "pesoKG" INTEGER DEFAULT 0,
    "larguraCM" INTEGER DEFAULT 0,
    "alturaCM" INTEGER DEFAULT 0,
    "profundidadeCM" INTEGER DEFAULT 0,
    "promocao" BOOLEAN NOT NULL DEFAULT false,
    "freteGratis" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "category_id" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photoproducts" (
    "id" TEXT NOT NULL,
    "photo" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "photoproducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variacoes" (
    "id" TEXT NOT NULL,
    "nameVariacao" VARCHAR(225),
    "product_id" TEXT NOT NULL,

    CONSTRAINT "variacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedidos" (
    "id" TEXT NOT NULL,
    "nameClient" VARCHAR(95) NOT NULL,
    "nameProduct" VARCHAR(225) NOT NULL,
    "valorPedido" INTEGER NOT NULL,
    "quantidadeDeItens" INTEGER NOT NULL,
    "statusDoPedido" BOOLEAN NOT NULL DEFAULT false,
    "modoDePagamento" VARCHAR(25) NOT NULL,
    "cancelar" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    "frete_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fretes" (
    "id" TEXT NOT NULL,
    "codigoRastreamento" VARCHAR(95),
    "status" BOOLEAN NOT NULL DEFAULT false,
    "custo" INTEGER,
    "prazoDeEntrega" VARCHAR(95),
    "nomeDoRecebedor" VARCHAR(95),
    "address" VARCHAR(405),
    "cep" VARCHAR(25),
    "city" VARCHAR(185),
    "state" VARCHAR(155),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fretes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "categories_categoryName_key" ON "categories"("categoryName");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photoproducts" ADD CONSTRAINT "photoproducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variacoes" ADD CONSTRAINT "variacoes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_frete_id_fkey" FOREIGN KEY ("frete_id") REFERENCES "fretes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
