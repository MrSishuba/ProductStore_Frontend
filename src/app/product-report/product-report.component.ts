import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { ChartBrandsComponent } from '../chart-brands/chart-brands.component';
import { ChartProductTypesComponent } from '../chart-product-types/chart-product-types.component';
import { APIService } from '../services/api.service';
import { ReportDataViewModel } from '../Shared/reporting';

@Component({
  selector: 'app-products-reports',
  standalone: true,
  imports: [CommonModule, MatGridListModule,ChartBrandsComponent,ChartProductTypesComponent],
  templateUrl: './product-report.component.html',
  styleUrl: './product-report.component.css'
})
export class ProductsReportsComponent {

  constructor(private service: APIService, private snackBar: MatSnackBar) { }

  //Hold Data 
  ChartData: ReportDataViewModel = new ReportDataViewModel();

  ngOnInit(): void {
    this.service.getReportData().subscribe(
      {
        next: (data) => {
          this.ChartData = data;
        },
        error: (error) => {
          this.snackBar.open(error.error, 'error', { duration: 2000 });
        }
      });
  }
}
