import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 3;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 122,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 450,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 210,
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product | boolean {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      return this.products[index];
    } else {
      return false;
    }
  }

  create(payload: Omit<Product, 'id'>): Product {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: Omit<Product, 'id'>): Product | undefined {
    const product = this.findOne(id);
    if (typeof product !== 'boolean') {
      const index = this.products.findIndex((product) => product.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
  }

  delete(id: number): Product | boolean {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      return false;
    } else {
      const productDelete = this.products[index];
      const newProducts = this.products.filter((product) => product.id !== id);
      this.products = newProducts;
      return productDelete;
    }
  }
}
