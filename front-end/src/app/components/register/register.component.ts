import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { RegisterUser, User } from 'src/app/models/user';
import { registerUser } from 'src/app/store/user/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {}

  togglePassword1() {
    this.hidePassword = !this.hidePassword;
  }

  togglePassword2() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }

  register() {
    if (
      !this.username.value ||
      !this.name.value ||
      !this.lastname.value ||
      !this.email.value ||
      !this.phone.value ||
      !this.address.value ||
      !this.password.value
    ) {
      return;
    }

    const user: RegisterUser = {
      username: this.username.value,
      name: this.name.value,
      lastName: this.lastname.value,
      email: this.email.value,
      password: this.password.value,
      phone: this.phone.value,
      address: this.address.value,
    };
    console.log('eee');

    this.store.dispatch(registerUser({ user }));
  }
}
