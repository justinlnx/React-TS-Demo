import { Product } from './product';
import { DatabaseSchema } from './database-schema';

export interface IDevice extends DatabaseSchema {
  device_id: string;
}