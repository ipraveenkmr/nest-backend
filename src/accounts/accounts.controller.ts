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
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

const uri =
  'mongodb+srv://devpraveenkr:G4zcwxTcz7Crno6J@cluster0.jyadqbv.mongodb.net/crm';
const client = new MongoClient(uri);
const collectionName = 'accounts';

@Controller('accounts')
export class AccountsController {
  @Get()
  async getData() {
    try {
      await client.connect();
      const collection = client.db().collection(collectionName);

      const accounts = await collection.find().toArray();

      return accounts;
    } catch (error) {
      console.error(error);
      throw new HttpException('Error fetching tasks', 500);
    } finally {
      await client.close();
    }
  }

  @Post()
  async createData(@Body() data: any) {
    try {
      await client.connect();
      const collection = client.db().collection(collectionName);

      // Validate data before insertion (optional)
      // if (!isValid(data)) {
      //   throw new HttpException('Invalid data provided', 400);
      // }

      data.createdAt = new Date(); // Add creation timestamp
      const result = await collection.insertOne(data);

      return result; 
    } catch (error) {
      console.error(error);
      throw new HttpException('Error creating record', 500);
    } finally {
      await client.close();
    }
  }

  @Patch(':id') 
  async updateData(@Param('id') id: string, @Body() data: any) {
    try {
      await client.connect();
      const collection = client.db().collection(collectionName);

      const objectId = new ObjectId(id); // Convert ID to ObjectId
      const updateResult = await collection.updateOne(
        { _id: objectId },
        { $set: data },
      );

      if (updateResult.modifiedCount === 0) {
        throw new HttpException('Record not found or no changes made', 404);
      }

      return updateResult; 
    } catch (error) {
      console.error(error);
      throw new HttpException('Error updating record', 500);
    } finally {
      await client.close();
    }
  }

  @Delete(':id')
  async deleteData(@Param('id') id: string) {
    try {
      await client.connect();
      const collection = client.db().collection(collectionName);

      const objectId = new ObjectId(id); 
      const deleteResult = await collection.deleteOne({ _id: objectId });

      if (deleteResult.deletedCount === 0) {
        throw new HttpException('Record not found', 404);
      }

      return deleteResult; 
    } catch (error) {
      console.error(error);
      throw new HttpException('Error deleting record', 500);
    } finally {
      await client.close();
    }
  }
}
