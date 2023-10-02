import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Roles } from 'src/app/enums/role';
import { User } from 'src/app/models/user';
import { logout } from 'src/app/store/user/user.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: User | null = null;
  admin: Boolean = false;
  imgPath: string = environment.api;
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.user = state.user.user;
      if (this.user?.role === Roles.Admin) {
        this.admin = true;
      }
    });
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.admin = false;
    this.store.dispatch(logout());
  }
}
