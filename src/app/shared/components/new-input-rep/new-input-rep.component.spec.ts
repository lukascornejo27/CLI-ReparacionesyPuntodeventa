import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInputRepComponent } from './new-input-rep.component';

describe('NewInputRepComponent', () => {
  let component: NewInputRepComponent;
  let fixture: ComponentFixture<NewInputRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInputRepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInputRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
