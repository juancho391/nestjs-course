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
  ParseIntPipe,
} from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(): any {
    return this.productsService.findAll();
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
  getProduct(@Param('id', ParseIntPipe) id: number): Product | boolean {
    // return `Product with id: ${id}`;
    const product = this.productsService.findOne(id);
    if (product === false) {
      return false;
    }
    return this.productsService.findOne(id);
  }

  //Metodo post
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createProduct(@Body() payload: { name: string; price: number }): any {
    // return {
    //   message: 'Product Created',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  //Metodo Put para actualizar
  @Put('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: { name: string; price: number },
  ): any {
    // return {
    //   message: 'Product Updated',
    //   id,
    //   payload,
    // };
    return this.productsService.update(id, payload);
  }

  //Metodo delete
  @Delete('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  deleteProduct(@Param('id', ParseIntPipe) id: number): any {
    return this.productsService.delete(id);
  }
}
