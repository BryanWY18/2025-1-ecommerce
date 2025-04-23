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

  findOnList:Product[]=[];

  constructor(public productService:ProductService, public router:Router ){}

  onSearch(toSearch:string){
      
      this.findOnList=this.productService.searchProduct(toSearch);
  }

  /* this.router.navigate(['/confirmation']) */

}
