import {Shape} from "./Shape";
import {Color} from "./Color";

export class Circle extends Shape implements Color{

  constructor(private _thisX: number,
              private _thisY: number,
              private _radius: number) {
    super(_thisX, _thisY);
  }

  get thisX(): number {
    return this._thisX;
  }

  set thisX(value: number) {
    this._thisX = value;
  }

  get thisY(): number {
    return this._thisY;
  }

  set thisY(value: number) {
    this._thisY = value;
  }

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    this._radius = value;
  }

  override getInfo(): string {
    return super.getInfo() + `, radius=${this._radius}`;
  }

  override calculateArea(): number {
    return Math.PI * Math.pow(this._radius,2);
  }

  getColorShape(): string {
    return "Circle is red";
  }


}
