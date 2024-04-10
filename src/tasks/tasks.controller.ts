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
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/CreateTask.dto';
import mongoose from 'mongoose';
import { UpdateTaskDto } from './dto/UpdateTask.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createTask(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto);
    return this.tasksService.createTask(createTaskDto);
  }

  @Get()
  getTasks() {
    return this.tasksService.getsTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Task not found', 404);
    const findTask = await this.tasksService.getTaskById(id);
    if (!findTask) throw new HttpException('Task not found', 404);
    return findTask;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const updatedTask = await this.tasksService.updateTask(id, updateTaskDto);
    if (!updatedTask) throw new HttpException('Task Not Found', 404);
    return updatedTask;
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const deletedTask = await this.tasksService.deleteTask(id);
    if (!deletedTask) throw new HttpException('Task Not Found', 404);
    return;
  }
}
