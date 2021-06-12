export interface Product {
    productId: number;
    name:      string;
    image:     null | string;
    stock:     number;
    price:     number;
    created:   Date;
}
