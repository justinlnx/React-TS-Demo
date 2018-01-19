import { Product } from './product';
import { DatabaseSchema } from './database-schema';

export interface ISite extends DatabaseSchema {
  parent_id: string;
  child_count: number;
}

export class Site extends Product {
  constructor(public parentId: string, public childCount: number) {
    super();
  }
  public schema(): ISite {
    // for example, define the default values
    let siteObject: ISite = {
      parent_id: this.parentId,
      child_count: this.childCount,
      alarms_count: 1,
      warnings_count: 1,
      name: 'test',
      id: 'id'
    };
    return siteObject;
  }
}
