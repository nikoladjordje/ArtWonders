import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { UserEffects } from './store/user/user.effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { StoreModule } from '@ngrx/store';
import { AppState } from './app.state';
import { userReducer } from './store/user/user.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { InterceptorService } from 'src/auth/interceptor';
import { AddPaintingComponent } from './components/add-painting/add-painting.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { PaintingEffects } from './store/painting/painting.effects';
import { PaintingComponent } from './components/painting/painting.component';
import { paintingReducer } from './store/painting/painting.reducer';
import { MyPaintingsComponent } from './components/my-paintings/my-paintings.component';
import { OrderEffects } from './store/order/order.effects';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { orderReducer } from './store/order/order.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    AddPaintingComponent,
    EditProfileComponent,
    PaintingComponent,
    MyPaintingsComponent,
    MyOrdersComponent,
    OrderItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot<AppState>({
      user: userReducer,
      painting: paintingReducer,
      order: orderReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, autoPause: true }),
    EffectsModule.forRoot([UserEffects, PaintingEffects, OrderEffects]),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatStepperModule,
    MatSelectModule,
    DragDropModule,
    MatRippleModule,
    MatDialogModule,
    MatChipsModule,
    MatBadgeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
