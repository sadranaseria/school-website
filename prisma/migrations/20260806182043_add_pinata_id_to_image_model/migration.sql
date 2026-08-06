/*
  Warnings:

  - The primary key for the `Image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Image` table. All the data in the column will be lost.
  - Added the required column `cid` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pinataId` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP CONSTRAINT "Image_pkey",
DROP COLUMN "id",
ADD COLUMN     "cid" TEXT NOT NULL,
ADD COLUMN     "pinataId" TEXT NOT NULL,
ADD CONSTRAINT "Image_pkey" PRIMARY KEY ("cid");
