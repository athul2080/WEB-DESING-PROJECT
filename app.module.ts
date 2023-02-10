import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from'@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AuthService } from './shared/auth.service';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { HeaderComponent } from './component/header/header.component';
import { DisplayComponent } from './component/display/display.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { DemoComponent } from './demo/demo.component';
import { DataComponent } from './shared/data/data.component';
import { BoyComponent } from './component/boy/boy.component';
import { GirlComponent } from './component/girl/girl.component';
import { CarComponent } from './component/car/car.component';
import { BoatComponent } from './component/boat/boat.component';
import { DroneComponent } from './component/drone/drone.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    HeaderComponent,
    DisplayComponent,
    MenuBarComponent,
    MainbarComponent,
    DemoComponent,
    DataComponent,
    BoyComponent,
    GirlComponent,
    CarComponent,
    BoatComponent,
    DroneComponent,
    CartComponent,
    ProductComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
