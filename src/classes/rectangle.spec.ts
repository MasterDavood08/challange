import { Coordinate } from 'src/dto/input.dto';
import { Rectangle } from './rectangle';

describe('rectangle class', () => {
  describe('check rectangles not be a line', () => {
    it('check main rectangle not be a line', () => {
      const mainRect = new Rectangle({
        x: 1,
        y: 2,
        width: 0,
        height: 5,
      } as Coordinate);

      const inputRect = new Rectangle({
        x: 1,
        y: 2,
        width: 0,
        height: 5,
      } as Coordinate);
      expect(Rectangle.isCommonArea(mainRect, inputRect)).toBe(false);
    });
  });

  describe('check one of rectangles side of other', () => {
    it('left-top point of main rectangle must be lower than right-bottom of input rectangle (x-Axis).', () => {
      const mainRect = new Rectangle({
        x: 1,
        y: 2,
        width: 4,
        height: 5,
      } as Coordinate);

      const inputRect = new Rectangle({
        x: -2,
        y: 2,
        width: 2,
        height: 5,
      } as Coordinate);
      expect(Rectangle.isCommonArea(mainRect, inputRect)).toBe(false);
    });

    it('left-top point of input rectangle must be lower than right-bottom of main rectangle (x-Axis).', () => {
      const mainRect = new Rectangle({
        x: 1,
        y: 2,
        width: 4,
        height: 5,
      } as Coordinate);

      const inputRect = new Rectangle({
        x: 6,
        y: 2,
        width: 2,
        height: 5,
      } as Coordinate);
      expect(Rectangle.isCommonArea(mainRect, inputRect)).toBe(false);
    });
  });

  describe('check onr of rectangles above of other', () => {
    it('right-bottom point of main rectangle must be lower than left-top of input rectangle (y-Axis).', () => {
      const mainRect = new Rectangle({
        x: 1,
        y: 4,
        width: 4,
        height: 5,
      } as Coordinate);

      const inputRect = new Rectangle({
        x: -1,
        y: 2,
        width: 7,
        height: 1,
      } as Coordinate);
      expect(Rectangle.isCommonArea(mainRect, inputRect)).toBe(false);
    });

    it('right-bottom point of input rectangle must be lower than left-top of main rectangle (y-Axis).', () => {
      const mainRect = new Rectangle({
        x: 2,
        y: 2,
        width: 4,
        height: 5,
      } as Coordinate);

      const inputRect = new Rectangle({
        x: 3,
        y: 7,
        width: 2,
        height: 5,
      } as Coordinate);
      expect(Rectangle.isCommonArea(mainRect, inputRect)).toBe(false);
    });
  });

  describe('otherwise', () => {
    it('must be a common area between rectangles', () => {
      const mainRect = new Rectangle({
        x: 2,
        y: 3,
        width: 4,
        height: 5,
      } as Coordinate);

      const inputRect = new Rectangle({
        x: 3,
        y: 4,
        width: 6,
        height: 5,
      } as Coordinate);
      expect(Rectangle.isCommonArea(mainRect, inputRect)).toBe(true);
    });
  });
});
