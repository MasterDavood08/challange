import { Coordinate } from 'src/dto/input.dto';

type Point = {
  x: number;
  y: number;
};

export class Rectangle {
  leftTop: Point;
  rightBottom: Point;

  constructor(coordinate: Coordinate) {
    this.leftTop = {
      x: coordinate.x,
      y: coordinate.y + coordinate.height,
    };
    this.rightBottom = {
      x: coordinate.x + coordinate.width,
      y: coordinate.y,
    };
  }

  static isCommonArea(
    mainRectangle: Rectangle,
    inputRectangle: Rectangle,
  ): boolean {
    if (
      mainRectangle.leftTop.x == mainRectangle.rightBottom.x ||
      mainRectangle.leftTop.y == mainRectangle.rightBottom.y ||
      inputRectangle.leftTop.x == inputRectangle.rightBottom.x ||
      inputRectangle.leftTop.y == inputRectangle.rightBottom.y
    ) {
      return false;
    }
    if (
      mainRectangle.leftTop.x >= inputRectangle.rightBottom.x ||
      inputRectangle.leftTop.x >= mainRectangle.rightBottom.x
    ) {
      return false;
    }
    if (
      mainRectangle.rightBottom.y >= inputRectangle.leftTop.y ||
      inputRectangle.rightBottom.y >= mainRectangle.leftTop.y
    ) {
      return false;
    }
    return true;
  }
}
