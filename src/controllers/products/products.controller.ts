import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(): string {
    return 'Welcome to products';
  }

  //Asi recibo parametros tipo query
  @Get('/filter')
  getProductsP(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 10,
    @Query('brand') brand: string,
  ): string {
    return `Products => limit: ${limit} , offset: ${offset}, brand: ${brand}`;
  }

  //Asi recibimos un parametro
  @Get('/:id')
  getProduct(@Param('id') id: number): string {
    return `Product with id: ${id}`;
  }
}
