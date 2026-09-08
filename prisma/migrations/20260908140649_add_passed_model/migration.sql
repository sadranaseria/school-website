-- CreateTable
CREATE TABLE "Passed" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "univercity" TEXT NOT NULL,

    CONSTRAINT "Passed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PassedImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "passedId" INTEGER NOT NULL,

    CONSTRAINT "PassedImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PassedImage" ADD CONSTRAINT "PassedImage_passedId_fkey" FOREIGN KEY ("passedId") REFERENCES "Passed"("id") ON DELETE CASCADE ON UPDATE CASCADE;
