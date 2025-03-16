import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/controllers/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { UsersController } from './users/controllers/users.controller';
import { BrandController } from './controllers/brand/brand.controller';
import { OrderController } from './controllers/order/order.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { ProductsService } from './products/services/products.service';
import { UsersService } from './users/services/users.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UsersController,
    BrandController,
    OrderController,
    CustomerController,
  ],
  providers: [AppService, ProductsService, UsersService],
})
export class AppModule {}
