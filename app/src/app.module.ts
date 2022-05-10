import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(`${process.env.DB_CONNECTION}`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
