import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { APIService } from '../services/api.service';
import { ChartConfiguration } from 'chart.js';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-chart-brands',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatSnackBarModule, BaseChartDirective],
  templateUrl: './chart-brands.component.html',
  styleUrls: ['./chart-brands.component.css']
})
export class ChartBrandsComponent {
  constructor(private service: APIService, private snackBar: MatSnackBar) {}

  @ViewChild(BaseChartDirective) baseChart!: BaseChartDirective;

  public barChartLegend = true;
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [{ data: [], label: 'Brands' }]
  };

  ngOnInit(): void {
    this.service.getReportData().subscribe({
      next: (data) => {
        let labels1 = [] as string[];
        let data1 = [] as number[];
        data.productCountByBrand.forEach(element => {
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
