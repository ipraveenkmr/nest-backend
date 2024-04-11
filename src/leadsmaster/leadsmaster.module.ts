import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Leadmaster, LeadmasterSchema } from 'src/schemas/Leadmaster.schema';
import { LeadmastersService } from './leadsmaster.service';
import { LeadmastersController } from './leadsmaster.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Leadmaster.name,
        schema: LeadmasterSchema,
      },
    ]),
  ],
  providers: [LeadmastersService],
  controllers: [LeadmastersController],
})
export class LeadmastersModule {}
