import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';


export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;
}
