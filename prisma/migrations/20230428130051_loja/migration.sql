-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "StatusRedeSocial" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusTextoInstitucional" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusImagemLoja" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusProduct" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusDestaque" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusOferta" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusCategory" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusGroup" AS ENUM ('Ativo', 'Inativo');

-- CreateEnum
CREATE TYPE "StatusRelation" AS ENUM ('Ativo', 'Inativo');

-- CreateEnum
CREATE TYPE "StatusAtributo" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusBanner" AS ENUM ('Sim', 'Nao');

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
    "nameComplete" VARCHAR(295) NOT NULL,
    "slug" VARCHAR(295),
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
    "cellPhoneLoja" VARCHAR(85),
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
CREATE TABLE "redessociais" (
    "id" TEXT NOT NULL,
    "redeName" VARCHAR(325),
    "link" VARCHAR(2725),
    "imageRede" TEXT,
    "order" INTEGER,
    "posicao" VARCHAR(300),
    "slugPosicao" VARCHAR(295),
    "disponibilidade" "StatusRedeSocial" NOT NULL DEFAULT 'Disponivel',
    "loja_id" TEXT,

    CONSTRAINT "redessociais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "textosinstitucionais" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(325) NOT NULL,
    "slug" VARCHAR(325),
    "order" INTEGER,
    "posicao" VARCHAR(300),
    "slugPosicao" VARCHAR(325),
    "description" VARCHAR(95725),
    "disponibilidade" "StatusTextoInstitucional" NOT NULL DEFAULT 'Disponivel',
    "loja_id" TEXT,

    CONSTRAINT "textosinstitucionais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagesloja" (
    "id" TEXT NOT NULL,
    "titleImage" VARCHAR(425),
    "image" TEXT,
    "order" INTEGER,
    "posicao" VARCHAR(300),
    "slugPosicao" VARCHAR(325),
    "disponibilidade" "StatusImagemLoja" NOT NULL DEFAULT 'Disponivel',
    "someImage" BOOLEAN NOT NULL DEFAULT false,
    "textoinstitucional_id" TEXT,

    CONSTRAINT "imagesloja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "nameProduct" VARCHAR(325) NOT NULL,
    "slug" VARCHAR(325),
    "order" INTEGER,
    "posicao" VARCHAR(300),
    "slugPosicao" VARCHAR(325),
    "descriptionProduct1" VARCHAR(1725),
    "descriptionProduct2" VARCHAR(1725),
    "descriptionProduct3" VARCHAR(1725),
    "descriptionProduct4" VARCHAR(1725),
    "descriptionProduct5" VARCHAR(1725),
    "descriptionProduct6" VARCHAR(1725),
    "preco" INTEGER,
    "promocao" INTEGER,
    "sku" VARCHAR(25),
    "disponibilidade" "StatusProduct" NOT NULL DEFAULT 'Disponivel',
    "produtoDestaque" "StatusDestaque" NOT NULL DEFAULT 'Nao',
    "produtoOferta" "StatusOferta" NOT NULL DEFAULT 'Nao',
    "loja_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "categoryName" VARCHAR(300),
    "slug" VARCHAR(300),
    "order" INTEGER,
    "disponibilidade" "StatusCategory" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "loja_id" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagecategories" (
    "id" TEXT NOT NULL,
    "categoryImage" TEXT,
    "category_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "imagecategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groupcategories" (
    "id" TEXT NOT NULL,
    "nameGroup" VARCHAR(385),
    "itemName" VARCHAR(385),
    "slugCategoryOrItem" VARCHAR(400),
    "posicao" VARCHAR(300),
    "slugPosicao" VARCHAR(325),
    "order" INTEGER,
    "nivel" INTEGER,
    "category_id" TEXT,
    "groupId" TEXT,
    "status" "StatusGroup" NOT NULL DEFAULT 'Ativo',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "loja_id" TEXT,

    CONSTRAINT "groupcategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagegroupcategories" (
    "id" TEXT NOT NULL,
    "imageGroup" TEXT,
    "groupCategoy_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "imagegroupcategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relationproductcategories" (
    "id" TEXT NOT NULL,
    "product_id" TEXT,
    "category_id" TEXT NOT NULL,
    "nivel" INTEGER,
    "relationId" TEXT,
    "order" INTEGER,
    "posicao" VARCHAR(300),
    "slugPosicao" VARCHAR(325),
    "loja_id" TEXT,
    "status" "StatusRelation" NOT NULL DEFAULT 'Ativo',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "relationproductcategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photoproducts" (
    "id" TEXT NOT NULL,
    "photo" TEXT,
    "order" INTEGER,
    "posicao" VARCHAR(325),
    "slugPosicao" VARCHAR(325),
    "product_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "photoproducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atributos" (
    "id" TEXT NOT NULL,
    "nameAtributo" VARCHAR(300),
    "order" INTEGER,
    "linkProduct" TEXT,
    "linkVariante" TEXT,
    "disponibilidade" "StatusAtributo" NOT NULL DEFAULT 'Disponivel',
    "posicao" VARCHAR(300),
    "slug" VARCHAR(325),
    "product_id" TEXT,
    "variacao_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "atributos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "banners" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(355),
    "width" VARCHAR(55),
    "height" VARCHAR(55),
    "dateInicio" TEXT DEFAULT '01/01/3075 00:00',
    "dateFim" TEXT DEFAULT '01/01/5575 00:00',
    "banner" TEXT,
    "order" INTEGER,
    "url" TEXT,
    "posicao" VARCHAR(325),
    "slugPosicao" VARCHAR(325),
    "active" "StatusBanner" NOT NULL DEFAULT 'Nao',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "banners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variacoes" (
    "id" TEXT NOT NULL,
    "nameVariacao" VARCHAR(355),
    "slug" VARCHAR(355),
    "order" INTEGER,
    "posicao" VARCHAR(325),
    "slugPosicao" VARCHAR(325),
    "descriptionVariacao1" VARCHAR(1725),
    "descriptionVariacao2" VARCHAR(1725),
    "descriptionVariacao3" VARCHAR(1725),
    "descriptionVariacao4" VARCHAR(1725),
    "descriptionVariacao5" VARCHAR(1725),
    "descriptionVariacao6" VARCHAR(1725),
    "preco" INTEGER,
    "promocao" INTEGER,
    "skuVariacao" VARCHAR(25),
    "estoqueVariacao" INTEGER,
    "pesoKg" VARCHAR(15),
    "larguraCm" VARCHAR(15),
    "alturaCm" VARCHAR(15),
    "profundidadeCm" VARCHAR(15),
    "disponibilidadeVariacao" "StatusVariacao" NOT NULL DEFAULT 'Disponivel',
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
    "order" INTEGER,
    "posicao" VARCHAR(325),
    "slugPosicao" VARCHAR(325),
    "variacao_id" TEXT,
    "product_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "photovariacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avaliacoes" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "description" VARCHAR(1225),
    "pontuacao" VARCHAR(175),
    "product_id" TEXT,
    "status" TEXT,
    "loja_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "avaliacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newsletters" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(125) NOT NULL,
    "email" VARCHAR(155) NOT NULL,
    "loja_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "newsletters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contatos" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(125),
    "email" VARCHAR(155),
    "phone" VARCHAR(155),
    "empresa" VARCHAR(255),
    "setor" VARCHAR(355),
    "mensagem" VARCHAR(5555),
    "loja_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contatos_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "textosinstitucionais_slug_key" ON "textosinstitucionais"("slug");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "redessociais" ADD CONSTRAINT "redessociais_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "textosinstitucionais" ADD CONSTRAINT "textosinstitucionais_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagesloja" ADD CONSTRAINT "imagesloja_textoinstitucional_id_fkey" FOREIGN KEY ("textoinstitucional_id") REFERENCES "textosinstitucionais"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagecategories" ADD CONSTRAINT "imagecategories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groupcategories" ADD CONSTRAINT "groupcategories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groupcategories" ADD CONSTRAINT "groupcategories_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagegroupcategories" ADD CONSTRAINT "imagegroupcategories_groupCategoy_id_fkey" FOREIGN KEY ("groupCategoy_id") REFERENCES "groupcategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationproductcategories" ADD CONSTRAINT "relationproductcategories_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationproductcategories" ADD CONSTRAINT "relationproductcategories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationproductcategories" ADD CONSTRAINT "relationproductcategories_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photoproducts" ADD CONSTRAINT "photoproducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atributos" ADD CONSTRAINT "atributos_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atributos" ADD CONSTRAINT "atributos_variacao_id_fkey" FOREIGN KEY ("variacao_id") REFERENCES "variacoes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variacoes" ADD CONSTRAINT "variacoes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variacoes" ADD CONSTRAINT "variacoes_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photovariacoes" ADD CONSTRAINT "photovariacoes_variacao_id_fkey" FOREIGN KEY ("variacao_id") REFERENCES "variacoes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photovariacoes" ADD CONSTRAINT "photovariacoes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "newsletters" ADD CONSTRAINT "newsletters_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contatos" ADD CONSTRAINT "contatos_loja_id_fkey" FOREIGN KEY ("loja_id") REFERENCES "lojas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
