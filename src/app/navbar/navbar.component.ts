import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../prod-inter';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Output() listOutPut:EventEmitter<Product[]>=new EventEmitter<Product[]>();

  findOnList:Product[]=[];

  constructor(public productService:ProductService, private router:Router ){}

  onSearch(toSearch:string){
    if(toSearch==''){
      this.findOnList=this.productService.productList();
      this.listOutPut.emit(this.findOnList);
    }
    else{
      this.findOnList=this.productService.searchProduct(toSearch);
      this.listOutPut.emit(this.findOnList);
    }
  }

}
