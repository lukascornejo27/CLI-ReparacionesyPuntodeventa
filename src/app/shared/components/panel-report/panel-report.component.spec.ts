import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelReportComponent } from './panel-report.component';

describe('PanelReportComponent', () => {
  let component: PanelReportComponent;
  let fixture: ComponentFixture<PanelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
