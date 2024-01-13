import { IsString } from 'class-validator';
export interface Subscriber {
  id?: string;
  email: string;
  name: string;
}
