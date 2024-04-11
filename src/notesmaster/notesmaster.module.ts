import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Notemaster, NotemasterSchema } from 'src/schemas/Notemaster.schema';
import { NotemastersService } from './notesmaster.service';
import { NotemastersController } from './notesmaster.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Notemaster.name,
        schema: NotemasterSchema,
      },
    ]),
  ],
  providers: [NotemastersService],
  controllers: [NotemastersController],
})
export class NotemastersModule {}
