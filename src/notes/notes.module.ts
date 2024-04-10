import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';

@Module({
  imports: [],
  controllers: [NotesController],
})
export class NotesModule {}
