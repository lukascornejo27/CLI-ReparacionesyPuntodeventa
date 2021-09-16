import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelClientComponent } from './panel-client.component';

describe('PanelClientComponent', () => {
  let component: PanelClientComponent;
  let fixture: ComponentFixture<PanelClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
