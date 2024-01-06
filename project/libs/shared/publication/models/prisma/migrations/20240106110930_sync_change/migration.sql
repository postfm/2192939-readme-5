/*
  Warnings:

  - Changed the type of `public_type` on the `publics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `public_status` on the `publics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "publics" DROP COLUMN "public_type",
ADD COLUMN     "public_type" TEXT NOT NULL,
DROP COLUMN "public_status",
ADD COLUMN     "public_status" TEXT NOT NULL;

-- DropEnum
DROP TYPE "PublicStatus";

-- DropEnum
DROP TYPE "PublicType";
