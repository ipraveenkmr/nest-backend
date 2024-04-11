import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Productmaster, ProductmasterSchema } from 'src/schemas/Productmaster.schema';
import { ProductmastersService } from './productsmaster.service';
import { ProductmastersController } from './productsmaster.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Productmaster.name,
        schema: ProductmasterSchema,
      },
    ]),
  ],
  providers: [ProductmastersService],
  controllers: [ProductmastersController],
})
export class ProductmastersModule {}
