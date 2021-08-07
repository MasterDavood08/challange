import * as moment from 'moment';
export class RectangleDTO {
  constructor(data) {
    this.x = data.x;
    this.y = data.y;
    this.width = data.width;
    this.height = data.height;
    this.time = moment(data.time).format('YYYY-MM-DD HH:mm:ss');
  }
  x: number;
  y: number;
  width: number;
  height: number;
  time: string;
}
