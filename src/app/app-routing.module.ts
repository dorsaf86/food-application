import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminComponent } from './admin/admin.component';
import { CarteComponent } from './carte/carte.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriesComponent } from './galeries/galeries.component';
import { HeaderClientComponent } from './header-client/header-client.component';
import { HorairesComponent } from './horaires/horaires.component';
import { LoginComponent } from './login/login.component';
import { MenuRestoComponent } from './menu-resto/menu-resto.component';
import { NewCategorieComponent } from './new-categorie/new-categorie.component';
import { NewImageComponent } from './new-image/new-image.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AuthGuard } from './auth.guard';
import { HasRoleGuard } from './has-role.guard';
const routes: Routes = [

  { path: '', component: AcceuilComponent },
  { path: 'add', component: NewImageComponent, canActivate: [HasRoleGuard] },
  { path: 'new-reservation', component: NewReservationComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'admin/reservation', component: ReservationComponent, canActivate: [HasRoleGuard]},
  { path: 'admin/carte', component: CarteComponent},
  { path: 'admin/horaires', component: HorairesComponent},
  { path: 'admin/galeries', component: GaleriesComponent },
  { path: 'admin/menu-resto', component: MenuRestoComponent, canActivate: [HasRoleGuard]},
  { path: 'create', component: NewMenuComponent, canActivate: [HasRoleGuard]},
  { path: 'about', component: AboutComponent },
  { path: 'new-categorie', component: NewCategorieComponent, canActivate: [HasRoleGuard]},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'admin-register', component: AdminRegisterComponent },
  { path: 'client-register', component: ClientRegisterComponent, canActivate: [AuthGuard] },

  { path: 'header-client', component: HeaderClientComponent },
   { path: 'new-menu', component: NewImageComponent},
   { path: 'add', component: NewImageComponent}

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
