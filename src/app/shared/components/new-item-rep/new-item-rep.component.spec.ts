import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemRepComponent } from './new-item-rep.component';

describe('NewItemRepComponent', () => {
  let component: NewItemRepComponent;
  let fixture: ComponentFixture<NewItemRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewItemRepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
