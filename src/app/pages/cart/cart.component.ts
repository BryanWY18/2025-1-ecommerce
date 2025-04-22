import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../prod-inter';

@Component({
  selector: 'app-cart',
  standalone:true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(public cartService:CartService){}
  
  onShopping:Product[]=[];

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(){
    this.onShopping=this.cartService.getSelected(); 
    this.finalTotal();
  }

  removeFromCart(index:Product){
    this.cartService.removeFromCart(index);
    this.loadCart();
  };

  totalPrice:number=0;

  finalTotal(){
    this.totalPrice=this.onShopping.reduce((total, product)=> total+product.price, 0);
  };

}
