import { Controller, Get, Param } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Get()
  getCustomers(): string {
    return 'Welcome to customers';
  }

  @Get(':id')
  getCustomer(@Param('id') id: number): string {
    return `Customer with id => ${id}`;
  }
}
