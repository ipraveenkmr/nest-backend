import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Opportunitymaster, OpportunitymasterSchema } from 'src/schemas/Opportunitymaster.schema';
import { OpportunitymastersService } from './opportunitymaster.service';
import { OpportunitymastersController } from './opportunitymaster.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Opportunitymaster.name,
        schema: OpportunitymasterSchema,
      },
    ]),
  ],
  providers: [OpportunitymastersService],
  controllers: [OpportunitymastersController],
})
export class OpportunitymastersModule {}
