import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../../calculator.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent implements OnInit {

  totalAmount!: number;
  discountPercentage!: number;

  discountAmount!: number;

  constructor(private calcService: CalculatorService) {
    console.log('CartComponent called');
  }

  ngOnInit(): void {
    console.log('Cart Component - Lifecycle method - init')
  }

  onSubmit() {
    //Check form values
    console.log('Form is submitted', this.totalAmount, this.discountPercentage);
    this.discountAmount = this.calcService.calculateDiscountAmount(this.totalAmount, this.discountPercentage);


  }
}
