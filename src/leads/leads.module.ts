import { Module } from '@nestjs/common';
import { LeadsController } from './leads.controller';

@Module({
  imports: [],
  controllers: [LeadsController],
})
export class LeadsModule {}
