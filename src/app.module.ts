import { Module } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { HttpModule } from '@nestjs/axios';
import { HttpService } from '@nestjs/axios';

const API_KEY = '123456';
const API_KEY_PROD = '123456789';

@Module({
  imports: [UsersModule, ProductsModule, HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      // useValue: API_KEY,
      useValue: process.env.NODE_ENV === 'production' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'TASKS',
      useFactory: async (https: HttpService) => {
        const response = https.get<{ data: any }>(
          'https://jsonplaceholder.typicode.com/todos',
        );
        const tasks = await firstValueFrom(response);
        return tasks.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
