import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  //Asi recibo 2 parametros=> http://localhost:3000/categories/4/products/2
  @Get('/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: number,
    @Param('productId') productId: number,
  ): string {
    return `category with id: ${categoryId} and product with id : ${productId}`;
  }
}
