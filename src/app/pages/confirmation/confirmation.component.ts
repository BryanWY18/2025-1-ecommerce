import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-confirmation',
  standalone:true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {

  constructor(public cartService:CartService){}

  orderTicket:any=[];
  orderProducts:any=[];

  ngOnInit(): void {
    this.loadOrderTicket();
    this.loaderProducts();
    this.finalTotal();
  };

  loadOrderTicket(){
    this.orderTicket=this.cartService.orderDetails(); 
  };

  loaderProducts(){
    this.orderProducts=this.cartService.orderProducts(); 
  };

  totalPrice:number=0;
   
  finalTotal(){
    this.totalPrice=this.orderProducts.reduce((total: number, product: any) => total + product.price, 0);
  };

}
