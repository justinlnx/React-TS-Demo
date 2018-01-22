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

export enum AlertTypes {
  Warning,
  Error,
  Healthy
}

/* if DatabaseSchema has a property called status with type AlertTypes, 
    and then we could do the following to assign the AlertTypes */
// let siteObj = new Site('parentId', 1);
// let siteSchema = siteObj.schema();
// server.status = AlertTypes.Error;