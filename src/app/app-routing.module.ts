import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { CartComponent } from './Components/cart/cart.component';
import { AuthGuard } from './shared/auth.guard';
import { CheckOutComponent } from './Components/check-out/check-out.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },{
    path:'navbar',
    component:NavBarComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'checkout',
    component:CheckOutComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
