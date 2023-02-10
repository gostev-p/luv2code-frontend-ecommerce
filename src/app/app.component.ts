import { Component } from '@angular/core';
import {Shape} from "../inheritance-training/Shape";
import {Circle} from "../inheritance-training/Circle";
import {Rectangle} from "../inheritance-training/Rectangle";
import {Color} from "../inheritance-training/Color";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-training';

  constructor() {
    let myCircle = new Circle(2,6,9);
    let myRectangle = new Rectangle(5, 6, 7 ,8);

    let theShapes: Shape[] = [];
    theShapes.push(myRectangle, myCircle);

    for (let tempShape of theShapes){
      console.log(tempShape.getInfo());
      console.log(tempShape.calculateArea() + "\n");
    }

    let colorShapes: Color[] = [];
    colorShapes.push(myCircle, myRectangle);

    for (let tempColorShape of colorShapes){
      console.log(tempColorShape.getColorShape());
    }
  }

}
