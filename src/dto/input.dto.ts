export type Coordinate = {
  x: number;
  y: number;
  width: number;
  height: number;
};
export class InputDTO {
  main: Coordinate;
  input: Coordinate[];
}
