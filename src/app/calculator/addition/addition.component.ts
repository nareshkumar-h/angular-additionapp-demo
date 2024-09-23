import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../../calculator.service';

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addition.component.html',
  styles: ``
})
export class AdditionComponent {

  //Input
  number1!: number;
  number2!: number;

  //output
  result!: number;

  constructor(private calcService: CalculatorService) {
    console.log('AdditionComponent constructor');
  }

  add() {

    // alert("Form is submitted");
    //Check form values 
    console.log('Number 1:' + this.number1);
    console.log('Number 2', this.number2);

    //Business Logic
    // this.result = this.number1 + this.number2;
    this.result = this.calcService.addition(this.number1, this.number2);
    console.log('Result:', this.result);

  }

}
