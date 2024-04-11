import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Notemaster extends Document {
  @Prop({ required: true })
  userId: string;
  
  @Prop({ type: Object })
  notes: any;

  @Prop()
  owner: string;

  @Prop()
  createdBy: string;

  @Prop()
  lastModifiedBy: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const NotemasterSchema = SchemaFactory.createForClass(Notemaster);
