-- CreateTable
CREATE TABLE "FreeCompany" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "emblemUrls" TEXT[],

    CONSTRAINT "FreeCompany_pkey" PRIMARY KEY ("id")
);
