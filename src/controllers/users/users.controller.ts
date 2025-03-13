import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): string {
    return 'Welcome to users module';
  }

  @Get(':id')
  getUser(@Param('id') id: number): string {
    return `User with id => ${id}`;
  }
}
