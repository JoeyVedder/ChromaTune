declare namespace Express { // This is a declaration merging
    export interface Request {
        user?: {
            userId: string;
            // add other user properties you need 
        }
    }
}