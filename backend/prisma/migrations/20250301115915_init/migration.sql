-- CreateEnum
CREATE TYPE "JobTitle" AS ENUM ('Developer', 'Designer', 'ProductManager', 'QA');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "jobTitleId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobTitle" (
    "id" SERIAL NOT NULL,
    "title" "JobTitle" NOT NULL,

    CONSTRAINT "jobTitle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_jobTitleId_fkey" FOREIGN KEY ("jobTitleId") REFERENCES "jobTitle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
