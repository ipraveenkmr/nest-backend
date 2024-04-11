import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Opportunitymaster } from 'src/schemas/Opportunitymaster.schema';
import { CreateOpportunitymasterDto } from './dto/CreateOpportunitymaster.dto';
import { UpdateOpportunitymasterDto } from './dto/UpdateOpportunitymaster.dto';

@Injectable()
export class OpportunitymastersService {
  constructor(@InjectModel(Opportunitymaster.name) private currentModel: Model<Opportunitymaster>) {}

  async createRecord(createCurrentmasterDto: CreateOpportunitymasterDto) {
    const newRecord = new this.currentModel(createCurrentmasterDto);
    return newRecord.save();
  }

  getsRecords() {
    return this.currentModel.find();
  }

  getRecordById(id: string) {
    return this.currentModel.findById(id);
  }

  updateRecord(id: string, updateCurrentDto: UpdateOpportunitymasterDto) {
    return this.currentModel.findByIdAndUpdate(id, updateCurrentDto, { new: true });
  }

  deleteRecord(id: string) {
    return this.currentModel.findByIdAndDelete(id);
  }
}
