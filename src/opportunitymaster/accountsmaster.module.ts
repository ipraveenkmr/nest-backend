import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Accountmaster, AccountmasterSchema } from 'src/schemas/Accountmaster.schema';
import { AccountmastersService } from './accountsmaster.service';
import { AccounmastersController } from './accountsmaster.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Accountmaster.name,
        schema: AccountmasterSchema,
      },
    ]),
  ],
  providers: [AccountmastersService],
  controllers: [AccounmastersController],
})
export class AccounmastersModule {}
