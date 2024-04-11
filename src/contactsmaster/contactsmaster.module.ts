import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Contactmaster, ContactmasterSchema } from 'src/schemas/Contactmaster.schema';
import { ContactmastersService } from './contactsmaster.service';
import { ContactmastersController } from './contactsmaster.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Contactmaster.name,
        schema: ContactmasterSchema,
      },
    ]),
  ],
  providers: [ContactmastersService],
  controllers: [ContactmastersController],
})
export class ContactmastersModule {}
