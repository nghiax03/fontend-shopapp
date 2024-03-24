import { Order } from "./order";
import { Product } from "./product";

export interface OrderDetail{
    id: number;
    order: Order;
    product: Product;
    number_of_products: number;
    total_money: number;
    color?: string;
}