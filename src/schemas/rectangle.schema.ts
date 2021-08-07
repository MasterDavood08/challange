import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RectangleDocument = Rectangle & Document;

@Schema()
export class Rectangle {
  @Prop()
  x: number;

  @Prop()
  y: number;

  @Prop()
  width: number;

  @Prop()
  height: number;

  @Prop()
  time?: Date;
}

export const RectangleSchema = SchemaFactory.createForClass(Rectangle);
