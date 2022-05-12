import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('api/v1/products')
export class ProductsController {

    constructor(private service: ProductsService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Post()
    createProduct(@Body() product: CreateProductDto) {
        return this.service.create(product);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() model: any) {
        return this.service.update(id, model);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.service.delete(id);
    }
}
