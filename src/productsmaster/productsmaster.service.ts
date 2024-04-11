import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Productmaster } from 'src/schemas/Productmaster.schema';
import { CreateProductmasterDto } from './dto/CreateProductmaster.dto';
import { UpdateProductmasterDto } from './dto/UpdateProductmaster.dto';

@Injectable()
export class ProductmastersService {
  constructor(@InjectModel(Productmaster.name) private currentModel: Model<Productmaster>) {}

  async createRecord(createCurrentDto: CreateProductmasterDto) {
    const newRecord = new this.currentModel(createCurrentDto);
    return newRecord.save();
  }

  getsRecords() {
    return this.currentModel.find();
  }

  getRecordById(id: string) {
    return this.currentModel.findById(id);
  }

  updateRecord(id: string, updateCurrentDto: UpdateProductmasterDto) {
    return this.currentModel.findByIdAndUpdate(id, updateCurrentDto, { new: true });
  }

  deleteRecord(id: string) {
    return this.currentModel.findByIdAndDelete(id);
  }
}
