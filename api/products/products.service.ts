import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product, ProductDocument } from '../schemas/product.schema';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }

    async update(id: string, updatedProductDto: UpdateProductDto) {
        // const updatedProduct = new this.productModel(updatedProductDto);
        // return this.productModel.updateOne({ id });
        return;
    }

    async delete(id: string) {
        return this.productModel.deleteOne({ id });
    }
}
