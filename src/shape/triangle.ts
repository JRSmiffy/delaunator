import { Point } from './point';

export class Triangle {
  private readonly _pointA: Point;
  private readonly _pointB: Point;
  private readonly _pointC: Point;

  constructor(pointA: Point, pointB: Point, pointC: Point) {
    this._pointA = pointA;
    this._pointB = pointB;
    this._pointC = pointC;
  }

  get pointA() {
    return this._pointA;
  }

  get pointB() {
    return this._pointB;
  }

  get pointC() {
    return this._pointC;
  }

  public static generateSuperTriangle(points: Point[]): Triangle {
    const buffer = 1.1;
    const innerWidth = Math.max(...points.map(pt => pt.x)) * buffer;
    const innerHeight = Math.max(...points.map(pt => pt.y)) * buffer;

    const pointA = new Point(-innerWidth, -innerHeight);
    const pointB = new Point(0, 2 * innerHeight);
    const pointC = new Point(2 * innerWidth, 0);

    return new Triangle(pointA, pointB, pointC);
  }

}