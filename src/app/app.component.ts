import { Component, AfterContentChecked, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';  // Import MatToolbarModule
import { MatButtonModule } from '@angular/material/button';    // Import MatButtonModule
import { MatIconModule } from '@angular/material/icon';        // Import MatIconModule
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Import MatProgressSpinnerModule
import { Router } from '@angular/router';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,     // Add MatToolbarModule
    MatButtonModule,      // Add MatButtonModule
    MatIconModule,        // Add MatIconModule
    MatProgressSpinnerModule, // Add MatProgressSpinnerModule
    
  ]
})
export class AppComponent implements AfterContentChecked {
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  isLoggedIn = false;

  constructor(private router: Router) {}

  toggleSidenav() {
    this.sidenav.toggle();
  }

  ngAfterContentChecked() {
    this.isLoggedIn = !!localStorage.getItem('User');
  }

  logout() {
    if (localStorage.getItem('User')) {
      localStorage.removeItem('User');
      this.router.navigateByUrl('login');
    }
  }
}