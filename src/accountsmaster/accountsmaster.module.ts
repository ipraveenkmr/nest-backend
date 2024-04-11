import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Accountmaster, AccountmasterSchema } from 'src/schemas/Accountmaster.schema';
import { AccountmastersService } from './accountsmaster.service';
import { AccountmastersController } from './accountsmaster.controller';

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
  controllers: [AccountmastersController],
})
export class AccountmastersModule {}
