import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Rectangle, RectangleSchema } from './schemas/rectangle.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/pasargad'),
    MongooseModule.forFeature([
      { name: Rectangle.name, schema: RectangleSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
