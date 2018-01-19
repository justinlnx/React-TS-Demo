import { DatabaseSchema } from './database-schema';

export abstract class Product {
  constructor() {
    // init
  }

  public abstract schema(): DatabaseSchema;

  // protected pushToDb(): any {
  //   let obj : any = this.schema();
    
  //   return dbService.push(obj);
  // }
}