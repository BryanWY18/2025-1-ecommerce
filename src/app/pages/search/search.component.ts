import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../prod-inter';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone:true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(public productService:ProductService, public cartService:CartService){}

  ngOnInit(){
    this.findList=this.productService.searchResults;
  }

  findList:Product[]=[]

  addToCar(index:any){
    this.cartService.addFavorites(index);
  }

}
