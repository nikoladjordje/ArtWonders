import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { updateProfile } from 'src/app/store/user/user.actions';
import { Roles } from 'src/app/enums/role';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  user: User | null = null;
  imgPath: string = environment.api;
  imagePreview: string | null = null;
  selectedImage: File | null = null;
  selectedFileName: string | null = null;

  username = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  hidePassword: boolean = true;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.user = state.user.user;
      if (this.user) {
        this.username.setValue(this.user.username);
        this.name.setValue(this.user.name);
        this.lastName.setValue(this.user.lastName);
        this.email.setValue(this.user.email);
        this.password.setValue(this.user.password);
        this.phone.setValue(this.user.phone);
        this.address.setValue(this.user.address);
      }

      if (this.user?.profilePicture) {
        this.imagePreview = this.user.profilePicture;
      } else {
        this.imagePreview = 'defaultUser.png';
      }
    });
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  save() {
    if (
      this.username.value !== this.user?.username ||
      this.name.value !== this.user?.name ||
      this.lastName.value !== this.user?.lastName ||
      this.email.value !== this.user?.email ||
      this.phone.value !== this.user?.phone ||
      this.address.value !== this.user?.address ||
      this.selectedImage
    ) {
      const updatedUser: User = {
        id: this.user?.id ?? 0,
        profilePicture: this.user?.profilePicture ?? '',
        password: this.user?.password ?? '',
        role: this.user?.role ?? Roles.User,
        username: this.username.value!,
        name: this.name.value!,
        lastName: this.lastName.value!,
        email: this.email.value!,
        phone: this.phone.value!,
        address: this.address.value!,
      };

      const formData = new FormData();

      formData.append('id', String(this.user?.id));
      if (this.selectedImage) {
        formData.append('profilePicture', this.selectedImage!);
      }
      formData.append('username', this.username.value!);
      formData.append('name', this.name.value!);
      formData.append('lastName', this.lastName.value!);
      formData.append('email', this.email.value!);
      formData.append('phone', this.phone.value!);
      formData.append('address', this.address.value!);

      this.store.dispatch(updateProfile({ user: formData }));
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
}
