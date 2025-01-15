import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-chart-product-types',
  standalone: true,
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatGridListModule,
    MatCardModule,
    BaseChartDirective
  ],
  templateUrl: './chart-product-types.component.html',
  styleUrls: ['./chart-product-types.component.css']
})
export class ChartProductTypesComponent {

  constructor(private service: APIService, private snackBar: MatSnackBar) {}

  @ViewChild(BaseChartDirective) baseChart!: BaseChartDirective;

  // Chart Code Default
  public barChartLegend = true;
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [{ data: [], label: 'Product Types' }]
  };

  ngOnInit(): void {
    this.service.getReportData().subscribe({
      next: (data) => {
        const labels1: string[] = [];
        const data1: number[] = [];
        data.productCountByProductType.forEach((element: { label: string; data: number }) => {
          labels1.push(element.label);
          data1.push(element.data);
        });
        this.barChartData.labels = labels1;
        this.barChartData.datasets[0].data = data1;
        this.baseChart.update();
      },
      error: (error) => {
        this.snackBar.open(error.error, 'error', { duration: 2000 });
      }
    });
  }
}

