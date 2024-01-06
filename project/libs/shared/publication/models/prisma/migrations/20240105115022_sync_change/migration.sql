-- CreateEnum
CREATE TYPE "PublicType" AS ENUM ('video', 'text', 'quote', 'photo', 'link');

-- CreateEnum
CREATE TYPE "PublicStatus" AS ENUM ('draft', 'posted');

-- CreateTable
CREATE TABLE "publics" (
    "public_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "is_repost" BOOLEAN NOT NULL,
    "original_user_id" TEXT NOT NULL,
    "original_public_id" TEXT NOT NULL,
    "title" TEXT,
    "video" TEXT,
    "header" TEXT,
    "notice" TEXT,
    "text" TEXT,
    "quote" TEXT,
    "author" TEXT,
    "photo" TEXT,
    "link" TEXT,
    "description" TEXT,
    "tags" TEXT[],
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "public_type" "PublicType" NOT NULL,
    "public_status" "PublicStatus" NOT NULL,

    CONSTRAINT "publics_pkey" PRIMARY KEY ("public_id")
);

-- CreateTable
CREATE TABLE "comments" (
    "comment_id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "likes" (
    "like_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("like_id")
);

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_public_id_fkey" FOREIGN KEY ("public_id") REFERENCES "publics"("public_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_public_id_fkey" FOREIGN KEY ("public_id") REFERENCES "publics"("public_id") ON DELETE CASCADE ON UPDATE CASCADE;
