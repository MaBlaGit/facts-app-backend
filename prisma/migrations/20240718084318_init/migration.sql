-- CreateTable
CREATE TABLE "Fact" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT,
    "source" TEXT,
    "category" TEXT,
    "votes_interesting" INTEGER NOT NULL DEFAULT 0,
    "votes_mind_blowing" INTEGER NOT NULL DEFAULT 0,
    "votes_false" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Fact_pkey" PRIMARY KEY ("id")
);
