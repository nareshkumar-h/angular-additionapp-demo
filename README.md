#### Agenda:
* Create a simple use case like AdditionApp, DiscountCalculator 

#### Goal: Maximum no of concepts in Angular


#### Tasks
==================
1. Angular Cli 
2. Angular create project 
3. VsCode - open project
4. Run project
==============
5. Create Module => ng g m calculator 
5. Create Component => ng g c calculator/addition
6.1 Implement SPA => <router-outlet></router-outlet> 
6.2 routes: [ path:'/addition', component: AdditionComponent ]
7. Addition Form => 2 text box and submit => FormsModule, ngModel , ngSubmit 
8. Create Constructor
9. Create Service => CalculatorService => calculateAddition(num1,num2)=num1+ num2
10. NgOnInit - Lifecycle method - it will get called after constructor
11. Security -> ng g guard auth => auth.guard.ts => localStorage > logout   => canActivate
12. Currency Pipe - Discount Amount(Rs): {{discountAmount | currency:'INR'}}

Missed concepts:
14: *ngFor
15. Mock API =< axios 
