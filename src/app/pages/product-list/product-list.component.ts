import { Component} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { Product } from '../../prod-inter';

@Component({
  selector: 'app-product-list',
  standalone:true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(public productService:ProductService, public cartService:CartService){}

  productData:Product[] = [];

  ngOnInit(): void {
    this.productData = this.productService.productList();
  }

  addToCar(index:any){
    this.cartService.addFavorites(index);
  }

}