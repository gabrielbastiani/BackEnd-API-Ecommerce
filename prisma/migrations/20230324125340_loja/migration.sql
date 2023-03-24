-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "News" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusCategory" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusProduct" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusDestaque" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusOferta" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusBannerHome" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusBannerPage" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusBannerMosaico" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusVariacao" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusFrete" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusDestaqueVariacao" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusOfertaVariacao" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusPedido" AS ENUM ('Valido', 'Cancelado');

-- CreateEnum
CREATE TYPE "EnderecoEntrega" AS ENUM ('Sim', 'Nao');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "nameComplete" VARCHAR(195) NOT NULL,
    "email" VARCHAR(180) NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" VARCHAR(125),
    "cnpj" VARCHAR(125),
    "inscricaoEstadual" VARCHAR(155),
    "phone" VARCHAR(135),
    "dataNascimento" VARCHAR(125),
    "genero" VARCHAR(135),
    "newslatter" VARCHAR(7),
    "local" VARCHAR(405),
    "numero" VARCHAR(125),
    "complemento" VARCHAR(155),
    "bairro" VARCHAR(185),
    "CEP" VARCHAR(125),
    "cidade" VARCHAR(185),
    "estado" VARCHAR(185),
    "loja_id" TEXT,
    "authenticated" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

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
    "logoLoja" TEXT,
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lojas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "categoryName" VARCHAR(300) NOT NULL,
    "codigo" VARCHAR(300),
    "disponibilidade" "StatusCategory" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "loja_id" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "nameProduct" VARCHAR(325) NOT NULL,
    "descriptionProduct1" VARCHAR(1725),
    "descriptionProduct2" VARCHAR(1725),
    "descriptionProduct3" VARCHAR(1725),
    "descriptionProduct4" VARCHAR(1725),
    "descriptionProduct5" VARCHAR(1725),
    "descriptionProduct6" VARCHAR(1725),
    "preco" INTEGER,
    "sku" VARCHAR(25),
    "estoque" INTEGER,
    "pesoKG" VARCHAR(15),
    "larguraCM" VARCHAR(15),
    "alturaCM" VARCHAR(15),
    "profundidadeCM" VARCHAR(15),
    "disponibilidade" "StatusProduct" NOT NULL DEFAULT 'Disponivel',
    "promocao" INTEGER,
    "category_id" TEXT,
    "produtoDestaque" "StatusDestaque" NOT NULL DEFAULT 'Nao',
    "produtoOferta" "StatusOferta" NOT NULL DEFAULT 'Nao',
    "loja_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photoproducts" (
    "id" TEXT NOT NULL,
    "photo" TEXT,
    "product_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "photoproducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bannerhomes" (
    "id" TEXT NOT NULL,
    "banner" TEXT,
    "url" TEXT,
    "active" "StatusBannerHome" NOT NULL DEFAULT 'Sim',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bannerhomes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bannerinpages" (
    "id" TEXT NOT NULL,
    "bannerPage" TEXT,
    "url" TEXT,
    "active" "StatusBannerPage" NOT NULL DEFAULT 'Sim',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bannerinpages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bannermosaicos" (
    "id" TEXT NOT NULL,
    "bannerMosaico" TEXT,
    "url" TEXT,
    "active" "StatusBannerMosaico" NOT NULL DEFAULT 'Sim',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bannermosaicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variacoes" (
    "id" TEXT NOT NULL,
    "nameVariacao" VARCHAR(355),
    "descriptionVariacao1" VARCHAR(1725),
    "descriptionVariacao2" VARCHAR(1725),
    "descriptionVariacao3" VARCHAR(1725),
    "descriptionVariacao4" VARCHAR(1725),
    "descriptionVariacao5" VARCHAR(1725),
    "descriptionVariacao6" VARCHAR(1725),
    "preco" INTEGER,
    "skuVariacao" VARCHAR(25),
    "estoqueVariacao" INTEGER,
    "pesoKg" VARCHAR(15),
    "larguraCm" VARCHAR(15),
    "alturaCm" VARCHAR(15),
    "profundidadeCm" VARCHAR(15),
    "disponibilidadeVariacao" "StatusVariacao" NOT NULL DEFAULT 'Disponivel',
    "promocao" INTEGER,
    "freteGratis" "StatusFrete" NOT NULL DEFAULT 'Sim',
    "quantidade" INTEGER,
    "quantidadeBloqueada" INTEGER DEFAULT 0,
    "product_id" TEXT,
    "variacaoDestaque" "StatusDestaqueVariacao" NOT NULL DEFAULT 'Nao',
    "variacaoOferta" "StatusOfertaVariacao" NOT NULL DEFAULT 'Nao',
    "loja_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "variacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photovariacoes" (
    "id" TEXT NOT NULL,
    "photoVariacao" TEXT NOT NULL,
    "variacao_id" TEXT,
    "product_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "photovariacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avaliacoes" (
    "id" TEXT NOT NULL,
    "clientName" VARCHAR(225),
    "description" VARCHAR(1225),
    "pontuacao" VARCHAR(75),
    "product_id" TEXT,
    "loja_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "avaliacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itens" (
    "id" TEXT NOT NULL,
    "carrinho_id" TEXT,
    "product_id" TEXT,
    "variacao_id" TEXT,
    "quantidade" INTEGER,
    "precoUnitario" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "itens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carrinhos" (
    "id" TEXT NOT NULL,
    "pedido_id" TEXT,
    "custoEntrega" TEXT,
    "prazoEntrega" TEXT,
    "tipoEntrega" TEXT,
    "valorPagamento" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "loja_id" TEXT,

    CONSTRAINT "carrinhos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entregas" (
    "id" TEXT NOT NULL,
    "codigoRastreamento" VARCHAR(95),
    "status" BOOLEAN NOT NULL DEFAULT false,
    "tipo" VARCHAR(25),
    "custo" INTEGER,
    "prazo" VARCHAR(95),
    "local" VARCHAR(405),
    "numero" VARCHAR(25),
    "complemento" VARCHAR(155),
    "bairro" VARCHAR(85),
    "CEP" VARCHAR(25),
    "cidade" VARCHAR(185),
    "estado" VARCHAR(155),
    "pedido_id" TEXT,
    "loja_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "entregas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagamentos" (
    "id" TEXT NOT NULL,
    "valor" INTEGER,
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
    "user_id" TEXT,
    "pedido_id" TEXT,
    "pagSeguroCode" TEXT,
    "loja_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pagamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedidos" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "pagamento_id" TEXT,
    "enderecoEntregaIgualCobranca" "EnderecoEntrega" NOT NULL DEFAULT 'Sim',
    "cancelado" "StatusPedido" NOT NULL DEFAULT 'Valido',
    "loja_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_cnpj_key" ON "users"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "categories_categoryName_key" ON "categories"("categoryName");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photoproducts" ADD CONSTRAINT "photoproducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variacoes" ADD CONSTRAINT "variacoes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variacoes" ADD CONSTRAINT "variacoes_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photovariacoes" ADD CONSTRAINT "photovariacoes_variacao_id_fkey" FOREIGN KEY ("variacao_id") REFERENCES "variacoes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photovariacoes" ADD CONSTRAINT "photovariacoes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itens" ADD CONSTRAINT "itens_carrinho_id_fkey" FOREIGN KEY ("carrinho_id") REFERENCES "carrinhos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itens" ADD CONSTRAINT "itens_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itens" ADD CONSTRAINT "itens_variacao_id_fkey" FOREIGN KEY ("variacao_id") REFERENCES "variacoes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carrinhos" ADD CONSTRAINT "carrinhos_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedidos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carrinhos" ADD CONSTRAINT "carrinhos_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entregas" ADD CONSTRAINT "entregas_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedidos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entregas" ADD CONSTRAINT "entregas_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedidos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_pagamento_id_fkey" FOREIGN KEY ("pagamento_id") REFERENCES "pagamentos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
