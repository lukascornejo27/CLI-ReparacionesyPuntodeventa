import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSaleComponent } from './panel-sale.component';

describe('PanelSaleComponent', () => {
  let component: PanelSaleComponent;
  let fixture: ComponentFixture<PanelSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
