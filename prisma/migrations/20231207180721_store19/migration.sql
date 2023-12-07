-- CreateTable
CREATE TABLE "visitedusers" (
    "id" TEXT NOT NULL,
    "visited" DOUBLE PRECISION,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "visitedusers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "visitedusers" ADD CONSTRAINT "visitedusers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
