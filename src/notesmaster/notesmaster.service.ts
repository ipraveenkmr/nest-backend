import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notemaster } from 'src/schemas/Notemaster.schema';
import { CreateNotemasterDto } from './dto/CreateNotemaster.dto';
import { UpdateNotemasterDto } from './dto/UpdateNotemasterdto';

@Injectable()
export class NotemastersService {
  constructor(@InjectModel(Notemaster.name) private currentModel: Model<Notemaster>) {}

  async createRecord(createCurrentmasterDto: CreateNotemasterDto) {
    const newRecord = new this.currentModel(createCurrentmasterDto);
    return newRecord.save();
  }

  getsRecords() {
    return this.currentModel.find();
  }

  getRecordById(id: string) {
    return this.currentModel.findById(id);
  }

  updateRecord(id: string, updateCurrentDto: UpdateNotemasterDto) {
    return this.currentModel.findByIdAndUpdate(id, updateCurrentDto, { new: true });
  }

  deleteRecord(id: string) {
    return this.currentModel.findByIdAndDelete(id);
  }
}
