import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { APIService } from '../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup = this.fb.group({
    emailaddress: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
  });

  constructor(private router: Router, private apiService: APIService, private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  RegisterUser(): void {
    if (this.registerFormGroup.valid) {
      this.apiService.RegisterUser(this.registerFormGroup.value).subscribe(() => {
        this.registerFormGroup.reset();
        this.router.navigate(['/login']).then((navigated: boolean) => {
          if (navigated) {
            this.snackBar.open('Registered successfully', '=-)', { duration: 5000 });
          }
        });
      }, (response: HttpErrorResponse) => {
        const errorMessage = response.status === 403 ? response.error : 'An error occurred. Please try again.';
        this.snackBar.open(errorMessage, '=-(', { duration: 5000 });
      });
    }
  }
}
