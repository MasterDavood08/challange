import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { InputDTO } from './dto/input.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async insertRectangle(@Body() data: InputDTO): Promise<any> {
    const result = await this.appService.insertData(data);
    return result;
  }
  @Get()
  async getRectangles(): Promise<any> {
    const rectangles = await this.appService.getRectangles();
    return rectangles;
  }
}
