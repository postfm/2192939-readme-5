export interface User {
  id?: string;
  email: string;
  name: string;
  avatar?: string;
  createAt?: Date;
  publicsCount?: number;
  subscribersCount?: number;
  subscribers: string[];
  subscriptions: string[];
}
