import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRepairComponent } from './panel-repair.component';

describe('PanelRepairComponent', () => {
  let component: PanelRepairComponent;
  let fixture: ComponentFixture<PanelRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelRepairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
