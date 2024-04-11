import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Leadmaster } from 'src/schemas/Leadmaster.schema';
import { CreateLeadmasterDto } from './dto/CreateLeadmaster.dto';
import { UpdateLeadmasterDto } from './dto/UpdateLeadmaster.dto';

@Injectable()
export class LeadmastersService {
  constructor(@InjectModel(Leadmaster.name) private currentModel: Model<Leadmaster>) {}

  async createRecord(createCurrentmasterDto: CreateLeadmasterDto) {
    const newRecord = new this.currentModel(createCurrentmasterDto);
    return newRecord.save();
  }

  getsRecords() {
    return this.currentModel.find();
  }

  getRecordById(id: string) {
    return this.currentModel.findById(id);
  }

  updateRecord(id: string, updateCurrentDto: UpdateLeadmasterDto) {
    return this.currentModel.findByIdAndUpdate(id, updateCurrentDto, { new: true });
  }

  deleteRecord(id: string) {
    return this.currentModel.findByIdAndDelete(id);
  }
}
