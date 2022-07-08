-- CreateEnum
CREATE TYPE "SEX" AS ENUM ('MALE', 'FEMALE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "sex" "SEX";
