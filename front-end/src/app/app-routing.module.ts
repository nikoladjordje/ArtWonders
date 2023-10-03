import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddPaintingComponent } from './components/add-painting/add-painting.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { PaintingComponent } from './components/painting/painting.component';
import { MyPaintingsComponent } from './components/my-paintings/my-paintings.component';
import { OrderService } from './services/order.service';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-painting', component: AddPaintingComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'painting', component: PaintingComponent },
  { path: 'my-paintings', component: MyPaintingsComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [OrderService],
})
export class AppRoutingModule {}
