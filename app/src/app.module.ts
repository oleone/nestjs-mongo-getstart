import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb://root:root@localhost:27017')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
