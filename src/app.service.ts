import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rectangle } from './classes/rectangle';
import { InputDTO } from './dto/input.dto';
import { RectangleDTO } from './dto/rectangle.dto';
import { RectangleDocument } from './schemas/rectangle.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Rectangle.name)
    private readonly model: Model<RectangleDocument>,
  ) {}
  async insertData(data: InputDTO): Promise<any> {
    const mainRect = new Rectangle(data.main);
    const items = [];
    const time = new Date();
    data.input.forEach((inputData) => {
      const inputRect = new Rectangle(inputData);
      if (Rectangle.isCommonArea(mainRect, inputRect)) {
        items.push({ ...inputData, time });
      }
    });
    if (Array.length != 0) {
      this.model.insertMany(items);
    }
    return items;
  }

  async getRectangles() {
    const rectangles = await this.model.find();
    return rectangles.map((r) => new RectangleDTO(r));
  }
}
