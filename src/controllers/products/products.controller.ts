import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

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

  //Metodo post
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createProduct(@Body() payload: { name: string; price: number }): any {
    return {
      message: 'Product Created',
      payload,
    };
  }

  //Metodo Put para actualizar
  @Put('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  updateProduct(
    @Param('id') id: number,
    @Body() payload: { name?: string; price?: number },
  ): any {
    return {
      message: 'Product Updated',
      id,
      payload,
    };
  }

  //Metodo delete
  @Delete('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  deleteProduct(@Param('id') id: number): any {
    return {
      message: 'Product deleted',
      id,
    };
  }
}
