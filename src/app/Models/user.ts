import { Order } from "./Order";

export interface User {
    id: number;
    username: string;
    password: string;
    profileId: number;
    isAdmin: boolean;
    orders: Order[];
    // payments: Payment[];
  
}
