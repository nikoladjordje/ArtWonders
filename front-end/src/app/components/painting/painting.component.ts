import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Painting } from 'src/app/models/painting';
import { loadPaintings } from 'src/app/store/painting/painting.actions';
import { loadPaintingList } from 'src/app/store/painting/painting.selector';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss'],
})
export class PaintingComponent implements OnInit {
  paintings$: Observable<Painting[]> = of([]);

  imgPath: string = environment.api;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(loadPaintings());
    this.paintings$ = this.store.select(loadPaintingList);
  }
}
