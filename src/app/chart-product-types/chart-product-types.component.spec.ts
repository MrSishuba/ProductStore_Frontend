import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartProductTypesComponent } from './chart-product-types.component';

describe('ChartProductTypesComponent', () => {
  let component: ChartProductTypesComponent;
  let fixture: ComponentFixture<ChartProductTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartProductTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartProductTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
