import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemRepComponent } from './list-item-rep.component';

describe('ListItemRepComponent', () => {
  let component: ListItemRepComponent;
  let fixture: ComponentFixture<ListItemRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemRepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
