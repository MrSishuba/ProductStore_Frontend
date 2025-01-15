import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { APIService } from '../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup = this.fb.group({
    emailaddress: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  
  isLoading: boolean = false;

  constructor(private router: Router, private apiService: APIService, private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  async LoginUser() {
    if (this.loginFormGroup.valid) {
      this.isLoading = true;
      this.apiService.LoginUser(this.loginFormGroup.value).subscribe(
        result => {
          localStorage.setItem('User', JSON.stringify(result));
          this.loginFormGroup.reset();
          this.router.navigateByUrl('productListing');
          this.isLoading = false;
        },
        (error: HttpErrorResponse) => {
          this.snackBar.open('Login failed. Please try again.', 'Close', {
            duration: 3000,
          });
          this.isLoading = false;
        }
      );
    }
  }
}
