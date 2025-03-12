import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello World!!!!';
  }

  //Asi recibimos un parametro
  @Get('/products/:id')
  getProducts(@Param('id') id: number): string {
    return `Product with id: ${id}`;
  }

  //Asi recibo 2 parametros
  @Get('/categories/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: number,
    @Param('productId') productId: number,
  ): string {
    return `category with id: ${categoryId} and product with id : ${productId}`;
  }
}
