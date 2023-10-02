import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Painting } from 'src/app/models/painting';
import { User } from 'src/app/models/user';
import {
  loadPaintings,
  loadUserPaintings,
} from 'src/app/store/painting/painting.actions';
import {
  loadPaintingList,
  loadUserPaintingList,
} from 'src/app/store/painting/painting.selector';
import { UserState } from 'src/app/store/user/user.reducer';
import { selectUser } from 'src/app/store/user/user.selector';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-paintings',
  templateUrl: './my-paintings.component.html',
  styleUrls: ['./my-paintings.component.scss'],
})
export class MyPaintingsComponent {
  paintings$: Observable<Painting[]> = of([]);
  user: User | null = null;
  imgPath: string = environment.api;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    // this.store.dispatch(loadPaintings());
    // this.paintings$ = this.store.select(loadPaintingList);
    // this.paintings$.subscribe((paintingList) => {
    //   console.log('Paintings:', paintingList);
    // });
    this.store.subscribe((state) => {
      this.user = state.user.user;
    });
    console.log(this.user);

    if (this.user) this.store.dispatch(loadUserPaintings({ user: this.user }));

    this.paintings$ = this.store.select(loadPaintingList);
    // this.paintings$.subscribe((paintings) => {
    //   console.log('Paintings:', paintings);
    // });
  }
}
