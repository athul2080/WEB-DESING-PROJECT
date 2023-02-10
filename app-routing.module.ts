import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatComponent } from './component/boat/boat.component';
import { BoyComponent } from './component/boy/boy.component';
import { CarComponent } from './component/car/car.component';
import { CartComponent } from './component/cart/cart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DroneComponent } from './component/drone/drone.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { GirlComponent } from './component/girl/girl.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'register',component:RegisterComponent},
  
  {path:'varify-email',component:VarifyEmailComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path :'demo',component:DemoComponent},
  {path :'boat',component:BoatComponent},
  {path : 'boy', component:BoyComponent},
  {path:'girl',component:GirlComponent},
  {path:'car',component:CarComponent},
  {path:'drone',component:DroneComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
