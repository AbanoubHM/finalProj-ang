import { User } from "./user";
import {OrderStatus} from '../enums/order-status';
import {OrderItems} from '../Models/order-items'

export interface Order {
  id: number;
  shipmentDate: Date ;
  name: string;
  comments: string;
  shippedTo: string;
  status: OrderStatus ;
  orderTotal: number ;
  paymentMode: string;
  user: User;
  order_items: OrderItems[];
}

