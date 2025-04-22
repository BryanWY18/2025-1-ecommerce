import { Injectable } from '@angular/core';
import { Product } from '../prod-inter';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getSelected(){
    const favoriteProduct=localStorage.getItem('cartShop');
    if(favoriteProduct===null){
      return[];
    }
    const favorites=JSON.parse(favoriteProduct); 
    return favorites;
  }
  
  addFavorites(index:Product){
    const favorites=this.getSelected();
    favorites.push(index);
    localStorage.setItem('cartShop', JSON.stringify(favorites));
    return favorites;
  }

  removeFromCart(product:Product){
    const favorites=this.getSelected() as Product[];
    console.log(favorites)
    const updateItem=favorites.filter(p => p.id_product!==product.id_product);
    localStorage.setItem('cartShop', JSON.stringify(updateItem));
  }

  userData(data:any){
    const userData=localStorage.getItem('userData');
    if(userData===null){
      localStorage.setItem('userData', JSON.stringify(data));
    }else{
      const user=JSON.parse(userData);
      const updateUser={...user, ...data};
      localStorage.setItem('userData', JSON.stringify(updateUser));
    }
  }

  orderDetails(){
    const userData=localStorage.getItem('userData');
    if(userData===null){
      return null;
    }else{
      const user=JSON.parse(userData);
      const orderDetails=user;
      return orderDetails;
    }
  }

  orderProducts(){
    const cartData=localStorage.getItem('cartShop');
    if(cartData===null){
      return null;
    }else{
      const cart=JSON.parse(cartData);
      const orderProducts=cart;
      return orderProducts;
    }
  }

}
