import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'category 1',
    },
  ];

  findAll(): Category[] {
    return this.categories;
  }

  findOne(id: number): Category | boolean {
    const category = this.categories.find((category) => category.id === id);
    if (!category) {
      throw new NotFoundException('Category not found');
    } else {
      return category;
    }
  }
}
