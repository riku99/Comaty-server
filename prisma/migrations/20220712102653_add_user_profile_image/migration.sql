-- CreateTable
CREATE TABLE "UserProfileImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "width" INTEGER,
    "height" INTEGER,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserProfileImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserProfileImage_userId_idx" ON "UserProfileImage"("userId");

-- AddForeignKey
ALTER TABLE "UserProfileImage" ADD CONSTRAINT "UserProfileImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
