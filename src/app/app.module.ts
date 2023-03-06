import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GaleriesComponent } from './galeries/galeries.component';
import { CarteComponent } from './carte/carte.component';
import { HorairesComponent } from './horaires/horaires.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewImageComponent } from './new-image/new-image.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from'@angular/material/datepicker' ;
import { ReservationComponent } from './reservation/reservation.component';
import { MenuRestoComponent } from './menu-resto/menu-resto.component';
import { NewMenuComponent } from './new-menu/new-menu.component' ;
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { RouterLinkActive } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NewCategorieComponent } from './new-categorie/new-categorie.component';
import  {  CarouselModule  }  from 'ngx-owl-carousel-o';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { ClientRegisterComponent } from './client-register/client-register.component' ;
import {MatListModule} from '@angular/material/list';
import { HeaderClientComponent } from './header-client/header-client.component';
import { CanActivate } from '@angular/router';










@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GaleriesComponent,
    CarteComponent,
    HorairesComponent,
    NewImageComponent,
    NewReservationComponent,
    ReservationComponent,
    MenuRestoComponent,
    NewMenuComponent,
    FooterComponent,
    AdminComponent,
    AcceuilComponent,
    HeaderComponent,
    AboutComponent,
    NewCategorieComponent,
    AdminRegisterComponent,
    ClientRegisterComponent,
    HeaderClientComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatCardModule,
    RouterLinkActive,
    NgImageSliderModule,
    NgxUsefulSwiperModule,
    CarouselModule,
    MatListModule,














  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
