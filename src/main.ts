import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Agregamos esta linea para que se aplique la validacion de los DTOs
  app.useGlobalPipes(
    //poniendo white list en true, se ignoran los campos que no esten en el DTO y no se envia al servicio
    //poniendo forbidNonWhitelisted en true, se lanza un error si se envia un campo que no esta en el DTO
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
