import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaintingComponent } from './add-painting.component';

describe('AddPaintingComponent', () => {
  let component: AddPaintingComponent;
  let fixture: ComponentFixture<AddPaintingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPaintingComponent]
    });
    fixture = TestBed.createComponent(AddPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
