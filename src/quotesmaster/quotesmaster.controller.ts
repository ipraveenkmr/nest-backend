import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  HttpException,
  Patch,
  Delete,
} from '@nestjs/common';
import { QuotemastersService } from './quotesmaster.service';
import { CreateQuotemasterDto } from './dto/CreateQuotemaster.dto';
import mongoose from 'mongoose';
import { UpdateQuotemasterDto } from './dto/UpdateQuotemaster.dto';

@Controller('quotesmaster')
export class QuotemastersController {
  constructor(private currentService: QuotemastersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createRecord(@Body() createCurrentDto: CreateQuotemasterDto) {
    console.log(createCurrentDto);
    return this.currentService.createRecord(createCurrentDto);
  }

  @Get()
  getRecords() {
    return this.currentService.getsRecords();
  }

  @Get(':id')
  async getRecordById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Record not found', 404);
    const findRecord = await this.currentService.getRecordById(id);
    if (!findRecord) throw new HttpException('Record not found', 404);
    return findRecord;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateRecord(
    @Param('id') id: string,
    @Body() updateCurrentDto: UpdateQuotemasterDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const updatedRecord = await this.currentService.updateRecord(id, updateCurrentDto);
    if (!updatedRecord) throw new HttpException('Record Not Found', 404);
    return updatedRecord;
  }

  @Delete(':id')
  async deleteRecord(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const deletedRecord = await this.currentService.deleteRecord(id);
    if (!deletedRecord) throw new HttpException('Record Not Found', 404);
    return;
  }
}
