export interface Comment {
  commentId?: string;
  text: string;
  userId: string;
  publicId: string;
  createAt?: Date;
  updateAt?: Date;
}
