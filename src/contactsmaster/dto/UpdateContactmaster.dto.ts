import { IsOptional, IsString } from 'class-validator';

export class UpdateContactmasterDto {
  @IsOptional()
  accounts?: string;

  @IsString()
  @IsOptional()
  owner?: string;

  @IsString()
  @IsOptional()
  createdBy?: string;

  @IsString()
  @IsOptional()
  lastModifiedBy?: string;

  @IsString()
  @IsOptional()
  createdAt?: string;

  @IsString()
  @IsOptional()
  updatedAt?: string;
}
