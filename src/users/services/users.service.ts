import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../DTOs/user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  private counterId = 3;
  private users: User[] = [
    {
      id: 1,
      name: 'User 1',
      email: 'user1@gmail.com',
      password: 'password1',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    } else {
      return user;
    }
  }

  createUser(payload: CreateUserDto): User {
    this.counterId++;
    const newUser = {
      id: this.counterId,
      ...payload,
    };

    this.users.push(newUser);
    return newUser;
  }

  deleteUser(id: number) {
    const user = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return user;
  }

  updateUser(id: number, payload: UpdateUserDto): User {
    const user = this.findOne(id);
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = {
      ...user,
      ...payload,
    };
    return this.users[index];
  }
}
