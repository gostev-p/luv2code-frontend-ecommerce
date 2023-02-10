import {Shape} from "./Shape";
import {Color} from "./Color";

export class Rectangle extends Shape implements Color{
  constructor(private _thisX: number,
              private _thisY: number,
              private _width: number,
              private _length: number) {
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

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get length(): number {
    return this._length;
  }

  set length(value: number) {
    this._length = value;
  }

  override getInfo(): string {
    return super.getInfo() + `, width=${this._width}, length=${this._length}`;
  }

  override calculateArea(): number {
    return this._width * this._length;
  }

  getColorShape(): string {
    return "Rectangle is green";
  }
}
