
export function exceptionService (exception: string): never {
  throw new Error(exception);
}