import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api/v1/products')
export class ProductsController {

    constructor(private service: ProductsService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Post()
    createProduct() {
        return this.service.create();
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return this.service.update(id);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.service.delete(id);
    }
}
