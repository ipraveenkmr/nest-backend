import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Quotemaster, QuotemasterSchema } from 'src/schemas/Quotemaster.schema';
import { QuotemastersService } from './quotesmaster.service';
import { QuotemastersController } from './quotesmaster.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Quotemaster.name,
        schema: QuotemasterSchema,
      },
    ]),
  ],
  providers: [QuotemastersService],
  controllers: [QuotemastersController],
})
export class QuotemastersModule {}
