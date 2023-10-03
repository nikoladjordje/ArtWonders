import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Painting, PaintingDto } from 'src/app/models/painting';
import { User } from 'src/app/models/user';
import { addPainting } from 'src/app/store/painting/painting.actions';
@Component({
  selector: 'app-add-painting',
  templateUrl: './add-painting.component.html',
  styleUrls: ['./add-painting.component.scss'],
})
export class AddPaintingComponent implements OnInit {
  user: User | null = null;
  constructor(
    private formBuilder: FormBuilder,
    // private dialog: MatDialogRef<AddPaintingComponent>,
    private store: Store<AppState>
  ) {}

  infoFormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    artist: ['', Validators.required],
    description: ['', Validators.required],
    creation_date: [
      '',
      Validators.required,
      this.dateShouldNotBeInFuture.bind(this),
    ],
    medium: ['', Validators.required],
    style: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    image: ['', Validators.required],
    availability: [false],
  });

  dateShouldNotBeInFuture(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    if (selectedDate > currentDate) {
      return { futureDate: true };
    }

    return null; // Validation passed
  }

  imagePreview: string | null = null;
  selectedImage: File | null = null;
  selectedFileName: string | null = null;

  createPainting() {
    const formData = new FormData();

    // const painting: PaintingDto = {
    //   title: this.infoFormGroup.controls['title'].value!,
    //   artist: this.infoFormGroup.controls['artist'].value!,
    //   description: this.infoFormGroup.controls['description'].value!,
    //   creation_date: this.infoFormGroup.controls['creation_date'].value!,
    //   medium: this.infoFormGroup.controls['medium'].value!,
    //   style: this.infoFormGroup.controls['style'].value!,
    //   price: this.infoFormGroup.controls['price'].value!,
    //   image: this.selectedFileName!,
    //   availability: this.infoFormGroup.controls['availability'].value!,
    //   owner: this.user!,
    //   order: null,
    // };

    formData.append('title', this.infoFormGroup.controls['title'].value!);
    formData.append('artist', this.infoFormGroup.controls['artist'].value!);
    formData.append(
      'description',
      this.infoFormGroup.controls['description'].value!
    );
    formData.append(
      'creation_date',
      this.infoFormGroup.controls['creation_date'].value!
    );
    formData.append('medium', this.infoFormGroup.controls['medium'].value!);
    formData.append('style', this.infoFormGroup.controls['style'].value!);
    formData.append(
      'price',
      this.infoFormGroup.controls['price'].value!.toString()
    );
    formData.append('image', this.selectedImage!);
    formData.append(
      'availability',
      this.infoFormGroup.controls['availability'].value!.toString()
    );
    formData.append('owner', this.user?.id.toString() || '');

    console.log(this.selectedFileName);
    console.log(this.infoFormGroup.controls['availability'].value!.toString());

    this.store.dispatch(addPainting({ painting: formData }));
  }

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.user = state.user.user;
    });
  }

  close() {
    // this.dialog.close();
  }

  onSubmit() {
    if (this.infoFormGroup.valid) {
      const formData = this.infoFormGroup.value;
      console.log(formData);
    } else {
    }
  }

  handleSelectedFile(event: any) {
    this.selectedImage = event.target.files[0];
    this.imagePreview = null;

    if (this.selectedImage) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(this.selectedImage);
    }

    this.selectedFileName = <string>this.selectedImage?.name;
  }

  removeImg(value: string) {
    this.imagePreview = null;
    this.selectedFileName = null;
  }
}
