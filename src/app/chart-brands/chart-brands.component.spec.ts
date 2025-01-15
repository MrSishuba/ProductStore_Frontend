import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBrandsComponent } from './chart-brands.component';

describe('ChartBrandsComponent', () => {
  let component: ChartBrandsComponent;
  let fixture: ComponentFixture<ChartBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartBrandsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
