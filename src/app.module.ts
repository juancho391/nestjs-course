import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { UsersController } from './controllers/users/users.controller';
import { BrandController } from './controllers/brand/brand.controller';
import { OrderController } from './controllers/order/order.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { ProductsService } from './services/products/products.service';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, UsersController, BrandController, OrderController, CustomerController],
  providers: [AppService, ProductsService, UsersService],
})
export class AppModule {}
