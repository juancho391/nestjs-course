import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTask {
  @IsString()
  @IsNotEmpty()
  readonly title: string;
}
