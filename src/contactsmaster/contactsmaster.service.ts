import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contactmaster } from 'src/schemas/Contactmaster.schema';
import { CreateContactmasterDto } from './dto/CreateContactmaster.dto';
import { UpdateContactmasterDto } from './dto/UpdateContactmaster.dto';

@Injectable()
export class ContactmastersService {
  constructor(@InjectModel(Contactmaster.name) private currentModel: Model<Contactmaster>) {}

  async createRecord(createCurrentDto: CreateContactmasterDto) {
    const newRecord = new this.currentModel(createCurrentDto);
    return newRecord.save();
  }

  getsRecords() {
    return this.currentModel.find();
  }

  getRecordById(id: string) {
    return this.currentModel.findById(id);
  }

  updateRecord(id: string, updateCurrentDto: UpdateContactmasterDto) {
    return this.currentModel.findByIdAndUpdate(id, updateCurrentDto, { new: true });
  }

  deleteRecord(id: string) {
    return this.currentModel.findByIdAndDelete(id);
  }
}
