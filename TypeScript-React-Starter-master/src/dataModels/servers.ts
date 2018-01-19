import { Product } from './product';
import { DatabaseSchema } from './database-schema';
import { IDevice } from './devices';

export interface IServer extends DatabaseSchema {
  site_id: string;
  devices: IDevice[];
}