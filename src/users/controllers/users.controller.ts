import { CreateUserDto, UpdateUserDto } from '../DTOs/user.dto';
import { User } from '../entities/user.entity';
import { UsersService } from '../services/users.service';
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  Delete,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getUsers(): User[] {
    return this.UsersService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getUser(@Param('id', ParseIntPipe) id: number): User {
    return this.UsersService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() payload: CreateUserDto): User {
    return this.UsersService.createUser(payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.UsersService.deleteUser(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserDto,
  ): User {
    return this.UsersService.updateUser(id, payload);
  }

  @Get(':id/orders')
  @HttpCode(HttpStatus.OK)
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.UsersService.getOrdersByUser(id);
  }
}
