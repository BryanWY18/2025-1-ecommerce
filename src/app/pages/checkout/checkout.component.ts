import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone:true,
  imports: [ReactiveFormsModule,],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  checkOutForm!: FormGroup;

  constructor(private fb:FormBuilder, public router:Router, public cartService:CartService){
    this.checkOutForm= this.fb.group({
      userName:['',[Validators.required, Validators.minLength(3)]],
      adress:['',[Validators.required, Validators.minLength(5)]],
      phone:['',[Validators.required,Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d{10}$/)]],
      paymentMethod:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      agreeTerms:[false,[Validators.requiredTrue]],
    });
  }

  onSubmit():void{
    if(this.checkOutForm.valid){
      const formData = this.checkOutForm.value;
      Swal.fire({
        title:"¿Verificaste bien tus datos?",
        text:"No se puede revertir esta operación",
        icon:"warning",
        color: "#fff",
        background:"#333",
        showCancelButton:true,
        confirmButtonColor:"#3085d6",
        cancelButtonColor:"#d33",
        confirmButtonText:"Si",
      }).then((result) =>{
        if(result.isConfirmed){
          this.cartService.userData(formData);
          Swal.fire({
            title:"Compra Realizada",
            text:"¡Gracias por comprar en TechNova!",
            icon:"success",
            color:"#fff",
            background:"#333",
          });
          this.router.navigate(['/confirmation'])}
        })
      }else{

    }
  }



}
