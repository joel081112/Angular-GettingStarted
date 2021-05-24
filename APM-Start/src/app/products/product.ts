// String typing will allow us to find bugs easier if changes happen when declaring a product variable
export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number
    imageUrl: string;
}