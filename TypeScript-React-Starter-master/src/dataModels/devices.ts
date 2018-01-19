import { Product } from './product';
import { DatabaseSchema } from './database-schema';

export interface IDevice extends DatabaseSchema {
  server_id: string;
}