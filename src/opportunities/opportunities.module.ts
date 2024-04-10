import { Module } from '@nestjs/common';
import { OpportunitiesController } from './opportunities.controller';

@Module({
  imports: [],
  controllers: [OpportunitiesController],
})
export class AccountsModule {}
