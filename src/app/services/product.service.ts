import { Injectable } from '@angular/core';
import { Product } from '../prod-inter';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products:Product[] = [
    {
      id_product: 1,
      name: 'Laptop HP Pavilion',
      price: 15000,
      description: 'Laptop con procesador Intel Core i5 de décima generación, 8GB RAM y 512GB SSD.',
      img: 'assets/HP-Pavilion.jpg',
    },
    {
      id_product: 2,
      name: 'Tablet Samsung Galaxy Tab S7',
      price: 12000,
      description: 'Tablet con pantalla de 11 pulgadas, 128GB de almacenamiento y soporte para S Pen.',
      img: 'assets/Galaxy-Tab-S7.jpg',
    },
    {
      id_product: 3,
      name: 'Computadora de Escritorio Dell Inspiron',
      price: 18000,
      description: 'Computadora de escritorio con procesador Intel Core i7, 16GB RAM y 1TB HDD.',
      img: 'assets/DELL-INSPIRON.jpg',
    },
    {
      id_product: 4,
      name: 'Smartphone Xiaomi Redmi Note 12',
      price: 7500,
      description: 'Teléfono inteligente con pantalla AMOLED de 6.5 pulgadas, 128GB de almacenamiento y cámara de 50MP.',
      img: 'assets/xiaomi-12-pro.png',
    },
    {
      id_product: 5,
      name: 'Monitor LG UltraWide 29"',
      price: 8500,
      description: 'Monitor ultrawide con resolución Full HD, ideal para multitareas y edición.',
      img: 'assets/Monitor-LG.jpg',
    },
    {
      id_product: 6,
      name: 'Mouse Logitech MX Master 3',
      price: 2500,
      description: 'Mouse ergonómico con conectividad Bluetooth y precisión avanzada.',
      img: 'assets/mouse-top.png',
    },
    {
      id_product: 7,
      name: 'Teclado Mecánico Razer BlackWidow',
      price: 3500,
      description: 'Teclado mecánico RGB con switches táctiles, ideal para gaming.',
      img: 'assets/Razer-BlackWidow.jpg',
    },
    {
      id_product: 8,
      name: 'Tablet iPad Air',
      price: 18000,
      description: 'Tablet con pantalla Liquid Retina de 10.9 pulgadas, chip M1 y 256GB de almacenamiento.',
      img: 'assets/iPad-Air.jpg',
    },
    {
      id_product: 9,
      name: 'Laptop MacBook Air M2',
      price: 28000,
      description: 'Laptop ultradelgada con chip M2, 8GB RAM y 512GB SSD.',
      img: 'assets/Air-M2.avif',
    },
    {
      id_product: 10,
      name: 'Auriculares Sony WH-1000XM5',
      price: 12000,
      description: 'Auriculares con cancelación de ruido activa y sonido de alta fidelidad.',
      img: 'assets/Sony-WH.jpg',
    },
  ];

  productList(){
    return this.products;
  }

  searchResults:Product[]=[];

  searchProduct(term:string):Product[]{
    const filteredProduct= this.products.filter(
      (product)=>
        product.name.toLowerCase().includes(term.toLowerCase())||
      product.description.toLowerCase().includes(term.toLowerCase())
    );
    this.searchResults=filteredProduct;
    return this.searchResults;
  }

}
