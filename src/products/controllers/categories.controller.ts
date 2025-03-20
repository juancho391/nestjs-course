import { Category } from '../entities/category.entity';
import { CategoriesService } from '../services/categories.service';
import {
  Controller,
  Get,
  //   Query,
  //   Param,
  //   Post,
  //   Body,
  //   Put,
  //   Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
  Param,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getCategories() {
    return this.categoriesService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  getCategory(@Param('id', ParseIntPipe) id: number): Category | boolean {
    return this.categoriesService.findOne(id);
  }
}
