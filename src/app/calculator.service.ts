import { Injectable } from '@angular/core';

//Talk to external people - REST API , JSON Server MOCK API, I/p=> O/p
// Calculate the logic
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  // addition(a,b){
  //   let result = 0;
  //   return result  = a+b;
  //   return result;
  // }

  /**
   * This method returns sum of two numbers
   * @param num1 
   * @param num2 
   * @returns 
   */

  addition(num1: number, num2: number): number {
    console.log('CalculatorService: addition method called ', num1, num2);
    let result: number = 0;
    result = num1 + num2;
    return result;
  }

  //Rs.50,10%,
  calculateDiscountAmount(totalPrice: number, discountPercentage: number) {
    let discountAmount = totalPrice * discountPercentage / 100;
    console.log('Discount Amount');
    return discountAmount;
  }
}
