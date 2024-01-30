export const MinLengthCheck = {
  Password: 6,
  Title: 20,
  Notice: 50,
  Text: 100,
  Quote: 20,
  Author: 3,
  Tag: 3,
  Name: 3,
  CommentText: 10,
} as const;

export const MaxLengthCheck = {
  Password: 12,
  Title: 50,
  Notice: 255,
  Text: 1024,
  Quote: 300,
  Author: 50,
  Description: 300,
  Tag: 10,
  Name: 50,
  CommentText: 300,
} as const;
