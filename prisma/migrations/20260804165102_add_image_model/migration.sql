-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(225) NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);
