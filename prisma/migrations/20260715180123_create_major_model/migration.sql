-- CreateTable
CREATE TABLE "Major" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" VARCHAR(225) NOT NULL,

    CONSTRAINT "Major_pkey" PRIMARY KEY ("id")
);
