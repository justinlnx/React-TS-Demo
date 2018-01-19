
export interface StoreState {
    languageName: string;
    enthusiasmLevel: number;
}

export enum AlertTypes {
    Warning,
    Error,
    Healthy
}

// let server = new Server('parentId', 1);
// server.status = AlertTypes.Error;