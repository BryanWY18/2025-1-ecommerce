import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { BannerComponent } from './pages/banner/banner.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [

    {path:'', component:BannerComponent},
    {path:'home', component:ProductListComponent},
    {path:'cart', component:CartComponent},
    {path:'shipmentForm', component:CheckoutComponent},
    {path:'confirmation', component:ConfirmationComponent},
    {path:'not-found', component:NotFoundComponent},
    {path:'search-list', component:SearchComponent},
    {path:'', redirectTo:'', pathMatch:'full'},
    {path:'**', pathMatch:'full', redirectTo:''}

];
