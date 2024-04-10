import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ProductMaster extends Document {
  @Prop({ required: true })
  userId: string;
  
  @Prop({ type: Object })
  products: any;

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

export const ProductMasterSchema = SchemaFactory.createForClass(ProductMaster);
