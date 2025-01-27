import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Accountmaster } from 'src/schemas/Accountmaster.schema';
import { CreateAccountmasterDto } from './dto/CreateAccountmaster.dto';
import { UpdateAccountmasterDto } from './dto/UpdateAccountmaster.dto';

@Injectable()
export class AccountmastersService {
  constructor(@InjectModel(Accountmaster.name) private currentModel: Model<Accountmaster>) {}

  async createRecord(createCurrentDto: CreateAccountmasterDto) {
    const newRecord = new this.currentModel(createCurrentDto);
    return newRecord.save();
  }

  getsRecords() {
    return this.currentModel.find();
  }

  getRecordById(id: string) {
    return this.currentModel.findById(id);
  }

  updateRecord(id: string, updateCurrentDto: UpdateAccountmasterDto) {
    return this.currentModel.findByIdAndUpdate(id, updateCurrentDto, { new: true });
  }

  deleteRecord(id: string) {
    return this.currentModel.findByIdAndDelete(id);
  }
}
