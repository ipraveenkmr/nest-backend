import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Leadmaster extends Document {
  @Prop({ required: true })
  userId: string;
  
  @Prop({ type: Object })
  leads: any;

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

export const LeadmasterSchema = SchemaFactory.createForClass(Leadmaster);
