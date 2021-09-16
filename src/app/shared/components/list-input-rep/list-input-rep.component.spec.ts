import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInputRepComponent } from './list-input-rep.component';

describe('ListInputRepComponent', () => {
  let component: ListInputRepComponent;
  let fixture: ComponentFixture<ListInputRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInputRepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInputRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
