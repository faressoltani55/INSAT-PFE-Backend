import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SuperviserDocument = Superviser & Document;

@Schema()
export class Superviser {

  @Prop({ required: true })
  id: string;

  @Prop({
    required: true,
  })
  firstname: string;

  @Prop({
    required: true,
  })
  lastname: string;

  @Prop({ required: true})
  email: string;

  @Prop()
  number: number;

}

export const SuperviserSchema = SchemaFactory.createForClass(Superviser);
