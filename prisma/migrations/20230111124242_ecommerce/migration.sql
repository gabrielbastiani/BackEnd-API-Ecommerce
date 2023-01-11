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
    "newslatter" BOOLEAN DEFAULT false,
    "rua" VARCHAR(405),
    "numero" VARCHAR(8),
    "bairro" VARCHAR(95),
    "complemento" VARCHAR(155),
    "cep" VARCHAR(25),
    "city" VARCHAR(185),
    "state" VARCHAR(155),
    "loja_id" TEXT,
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
CREATE TABLE "lojas" (
    "id" TEXT NOT NULL,
    "nameLoja" VARCHAR(185),
    "cnpjLoja" VARCHAR(85),
    "emailLoja" VARCHAR(95),
    "phoneLoja" VARCHAR(85),
    "ruaLoja" VARCHAR(405),
    "numeroLoja" VARCHAR(8),
    "bairroLoja" VARCHAR(95),
    "complementoLoja" VARCHAR(155),
    "cepLoja" VARCHAR(25),
    "cityLoja" VARCHAR(185),
    "stateLoja" VARCHAR(155),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lojas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "categoryName" VARCHAR(100) NOT NULL,
    "codigo" VARCHAR(5),
    "disponibilidade" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "loja_id" TEXT NOT NULL,

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
    "price" VARCHAR(15),
    "sku" VARCHAR(25),
    "estoque" VARCHAR(15),
    "pesoKG" VARCHAR(15),
    "larguraCM" VARCHAR(15),
    "alturaCM" VARCHAR(15),
    "profundidadeCM" VARCHAR(15),
    "disponibilidade" BOOLEAN NOT NULL DEFAULT true,
    "promocao" VARCHAR(15),
    "category_id" TEXT NOT NULL,
    "loja_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photoproducts" (
    "id" TEXT NOT NULL,
    "photo" TEXT,
    "product_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "photoproducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variacoes" (
    "id" TEXT NOT NULL,
    "nameVariacao" VARCHAR(155),
    "descriptionVariacao1" VARCHAR(725),
    "descriptionVariacao2" VARCHAR(725),
    "descriptionVariacao3" VARCHAR(725),
    "descriptionVariacao4" VARCHAR(725),
    "descriptionVariacao5" VARCHAR(725),
    "descriptionVariacao6" VARCHAR(725),
    "priceVariacao" VARCHAR(15),
    "skuVariacao" VARCHAR(25),
    "estoqueVariacao" VARCHAR(15),
    "pesoKGVariacao" VARCHAR(15),
    "larguraCMVariacao" VARCHAR(15),
    "alturaCMVariacao" VARCHAR(15),
    "profundidadeCMVariacao" VARCHAR(15),
    "disponibilidadeVariacao" BOOLEAN NOT NULL DEFAULT true,
    "promocaoVariacao" VARCHAR(15),
    "EntregaGratisVariacao" BOOLEAN NOT NULL DEFAULT false,
    "product_id" TEXT NOT NULL,
    "loja_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "variacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photovariacoes" (
    "id" TEXT NOT NULL,
    "photoVariacao" TEXT,
    "variacao_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "photovariacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avaliacoes" (
    "id" TEXT NOT NULL,
    "clientName" VARCHAR(225),
    "description" VARCHAR(225),
    "pontuacao" VARCHAR(25),
    "product_id" TEXT NOT NULL,
    "loja_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "avaliacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedidos" (
    "id" TEXT NOT NULL,
    "precoUnitario" VARCHAR(15),
    "quantidade" VARCHAR(55),
    "productStatic" VARCHAR(115),
    "statusDoPedido" BOOLEAN NOT NULL DEFAULT false,
    "cancelado" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "variacao_id" TEXT NOT NULL,
    "pagamento_id" TEXT NOT NULL,
    "entrega_id" TEXT NOT NULL,
    "loja_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagamentos" (
    "id" TEXT NOT NULL,
    "valor" VARCHAR(15),
    "formaDePagamento" VARCHAR(55),
    "parcelas" VARCHAR(15),
    "status" VARCHAR(55),
    "ruaPagamento" VARCHAR(405),
    "numeroPagamento" VARCHAR(8),
    "bairroPagamento" VARCHAR(95),
    "complementoPagamento" VARCHAR(155),
    "cepPagamento" VARCHAR(25),
    "cityPagamento" VARCHAR(185),
    "statePagamento" VARCHAR(155),
    "nomeCompletoPagamento" VARCHAR(95),
    "codigoArea" VARCHAR(15),
    "phonePagamento" VARCHAR(15),
    "dataDeNascimento" VARCHAR(15),
    "credit_card_token" TEXT,
    "cpfPagamento" VARCHAR(15),
    "enderecoEntregaIgualCobranca" BOOLEAN NOT NULL DEFAULT true,
    "pagSeguroCode" TEXT,
    "pedido_id" TEXT NOT NULL,
    "loja_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pagamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entregas" (
    "id" TEXT NOT NULL,
    "codigoRastreamento" VARCHAR(95),
    "status" BOOLEAN NOT NULL DEFAULT false,
    "tipo" VARCHAR(25),
    "custo" VARCHAR(15),
    "prazoDeEntrega" VARCHAR(95),
    "ruaEntrega" VARCHAR(405),
    "numeroEntrega" VARCHAR(25),
    "complementoEntrega" VARCHAR(155),
    "bairroEntrega" VARCHAR(85),
    "cepEntrega" VARCHAR(25),
    "cityEntrega" VARCHAR(185),
    "stateEntrega" VARCHAR(155),
    "pedido_id" TEXT NOT NULL,
    "loja_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "entregas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpfOrCnpj_key" ON "users"("cpfOrCnpj");

-- CreateIndex
CREATE UNIQUE INDEX "categories_categoryName_key" ON "categories"("categoryName");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photoproducts" ADD CONSTRAINT "photoproducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variacoes" ADD CONSTRAINT "variacoes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variacoes" ADD CONSTRAINT "variacoes_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photovariacoes" ADD CONSTRAINT "photovariacoes_variacao_id_fkey" FOREIGN KEY ("variacao_id") REFERENCES "variacoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_variacao_id_fkey" FOREIGN KEY ("variacao_id") REFERENCES "variacoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_pagamento_id_fkey" FOREIGN KEY ("pagamento_id") REFERENCES "pagamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_entrega_id_fkey" FOREIGN KEY ("entrega_id") REFERENCES "entregas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entregas" ADD CONSTRAINT "entregas_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entregas" ADD CONSTRAINT "entregas_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
