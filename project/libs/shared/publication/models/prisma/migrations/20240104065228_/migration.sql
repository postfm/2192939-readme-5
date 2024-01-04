-- CreateTable
CREATE TABLE "video_publics" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "video_publics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "video_publics_title_idx" ON "video_publics"("title");
