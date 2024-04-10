import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop({ unique: true, required: true })
  taskOwner: string;

  @Prop({ required: false })
  taskTitle?: string;

  @Prop({ required: false })
  taskType?: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
