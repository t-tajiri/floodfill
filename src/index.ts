const point: { [key: string]: number } = { x: 3, y: 4 };
const color: number = 3;

let screen: number[][] = [
                           [1, 1, 1, 1, 1, 1, 1, 1]
                         , [1, 1, 1, 1, 1, 1, 0, 0]
                         , [1, 0, 0, 1, 1, 0, 1, 1]
                         , [1, 2, 2, 2, 2, 0, 1, 0]
                         , [1, 1, 1, 2, 2, 0, 1, 0]
                         , [1, 1, 1, 2, 2, 2, 2, 0]
                         , [1, 1, 1, 1, 1, 2, 1, 1]
                         , [1, 1, 1, 1, 1, 2, 2, 1]
                         ];

function aroundFill(point: { [key: string]: number }, previousColor: number, newColor: number): void {
  const originX: number = point.x;
  const originY: number = point.y;

  point.x = originX + 1;
  point.y = originY;
  fullfill(point, previousColor, newColor);

  point.x = originX - 1;
  point.y = originY;
  fullfill(point, previousColor, newColor);

  point.x = originX;
  point.y = originY + 1;
  fullfill(point, previousColor, newColor);

  point.x = originX;
  point.y = originY - 1;
  fullfill(point, previousColor, newColor);
}

function fullfill(point: { [key: string]: number }, previousColor: number, newColor: number): void {
  if (point.x < 0 || screen.length <= point.x || point.y < 0 || screen[point.x].length <= point.y) {
    return;
  }

  if (screen[point.x][point.y] !== previousColor) {
    return;
  }

  screen[point.x][point.y] = newColor;

  aroundFill(point, previousColor, newColor);
}

function floodfill(point: { [key: string]: number }, newColor: number): void {
  const previousColor: number = screen[point.x][point.y];
  fullfill(point, previousColor, newColor);
}

export function main(point: { [key: string]: number }, color: number): void {
  floodfill(point, color);
}

console.log(screen);
console.log('----- filling new color... -----');

main(point, color);

console.log(screen);
