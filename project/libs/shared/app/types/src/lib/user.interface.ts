export interface User {
  _id?: string;
  email: string;
  name: string;
  avatar?: string;
  publicsCount?: number;
  subscribersCount?: number;
}
