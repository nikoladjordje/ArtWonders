import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PaintingService } from 'src/app/services/painting.service';
import { UserService } from 'src/app/services/user.service';
import * as PaintingActions from './painting.actions';
import { Painting } from 'src/app/models/painting';
import { User } from 'src/app/models/user';

@Injectable()
export class PaintingEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private paintingService: PaintingService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  addBouquet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PaintingActions.addPainting),
      mergeMap(({ painting }) =>
        this.paintingService.addPainting(painting).pipe(
          map((painting: Painting) => {
            this.snackBar.open('Successsfuly created painting', 'Ok', {
              duration: 3000,
            });
            return PaintingActions.addPaintingSuccess({ painting });
          }),
          catchError(({ error }) => {
            this.snackBar.open(error, 'Close', { duration: 3000 });
            return of({ type: 'Load error' });
          })
        )
      )
    )
  );

  loadPaintings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PaintingActions.loadPaintings),
      mergeMap(() =>
        this.paintingService.getAll().pipe(
          map(
            (paintings) =>
              PaintingActions.loadPaintingsSuccess({ paintings: paintings }),
            catchError(({ error }) => {
              this.snackBar.open(error, 'Close', { duration: 3000 });
              return of({ type: 'Load error' });
            })
          )
        )
      )
    )
  );

  // loadUserPaintings$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(PaintingActions.loadUserPaintings),
  //     map((action) => action.user),
  //     mergeMap((currentUser: User) =>
  //       this.paintingService.getPaintingsByOwner(currentUser.id).pipe(
  //         map(
  //           (paintings) =>
  //             PaintingActions.loadUserPaintingsSuccess({
  //               paintings: paintings,
  //             }),
  //           catchError(({ error }) => {
  //             this.snackBar.open(error, 'Close', { duration: 3000 });
  //             return of({ type: 'Load error' });
  //           })
  //         )
  //       )
  //     )
  //   )
  // );

  // loadPaintingsByUser$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(PaintingActions.loadUserPaintings),
  //     mergeMap((action) =>
  //       this.paintingService.getPaintingsByOwner(action.user.id).pipe(
  //         map(
  //           (paintings) =>
  //             PaintingActions.loadUserPaintingsSuccess({
  //               paintings: paintings,
  //             }),
  //           catchError(({ error }) => {
  //             this.snackBar.open(error, 'Close', { duration: 3000 });
  //             return of({ type: 'Load error' });
  //           })
  //         )
  //       )
  //     )
  //   )
  // );

  loadMyPainting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PaintingActions.loadUserPaintings),
      mergeMap(({ user }) =>
        this.paintingService.getPaintingsByOwner(user.id).pipe(
          map((paintings) =>
            PaintingActions.loadUserPaintingsSuccess({ paintings: paintings })
          ),
          catchError(({ error }) => {
            this.snackBar.open(error, 'Close', { duration: 3000 });
            return of({ type: 'Load error' });
          })
        )
      )
    )
  );
}
