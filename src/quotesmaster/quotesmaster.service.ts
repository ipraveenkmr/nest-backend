import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quotemaster } from 'src/schemas/Quotemaster.schema';
import { CreateQuotemasterDto } from './dto/CreateQuotemaster.dto';
import { UpdateQuotemasterDto } from './dto/UpdateQuotemaster.dto';

@Injectable()
export class QuotemastersService {
  constructor(@InjectModel(Quotemaster.name) private currentModel: Model<Quotemaster>) {}

  async createRecord(createCurrentDto: CreateQuotemasterDto) {
    const newRecord = new this.currentModel(createCurrentDto);
    return newRecord.save();
  }

  getsRecords() {
    return this.currentModel.find();
  }

  getRecordById(id: string) {
    return this.currentModel.findById(id);
  }

  updateRecord(id: string, updateCurrentDto: UpdateQuotemasterDto) {
    return this.currentModel.findByIdAndUpdate(id, updateCurrentDto, { new: true });
  }

  deleteRecord(id: string) {
    return this.currentModel.findByIdAndDelete(id);
  }
}
