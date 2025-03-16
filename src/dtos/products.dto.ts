export class CreateProductDto {
  readonly name: string;
  readonly price: number;
  readonly brand: string;
}

export class UpdateProductDto {
  readonly name?: string;
  readonly price?: number;
  readonly brand?: string;
}
