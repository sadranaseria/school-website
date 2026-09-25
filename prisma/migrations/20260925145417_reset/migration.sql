/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `students` to the `Major` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Major" ADD COLUMN     "students" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Image";

-- CreateTable
CREATE TABLE "MajorImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "majorId" INTEGER NOT NULL,

    CONSTRAINT "MajorImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "key" TEXT NOT NULL,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "anwser" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roadmap" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Roadmap_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MajorImage" ADD CONSTRAINT "MajorImage_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major"("id") ON DELETE CASCADE ON UPDATE CASCADE;
