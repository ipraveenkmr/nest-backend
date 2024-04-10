import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class QuoteMaster extends Document {
  @Prop({ required: true })
  userId: string;
  
  @Prop({ type: Object })
  quotes: any;

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

export const QuoteMasterSchema = SchemaFactory.createForClass(QuoteMaster);
