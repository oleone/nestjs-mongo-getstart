export class CreateProductDto {
    name: string;
    sku: string;
    categories: string[];
    createdDate: Date;
    updatedDate: Date;
}