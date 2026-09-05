-- DropForeignKey
ALTER TABLE "NewsImage" DROP CONSTRAINT "NewsImage_newsId_fkey";

-- AddForeignKey
ALTER TABLE "NewsImage" ADD CONSTRAINT "NewsImage_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;
