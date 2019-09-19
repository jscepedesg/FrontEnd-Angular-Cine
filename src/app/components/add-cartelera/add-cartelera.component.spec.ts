import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarteleraComponent } from './add-cartelera.component';

describe('AddCarteleraComponent', () => {
  let component: AddCarteleraComponent;
  let fixture: ComponentFixture<AddCarteleraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarteleraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarteleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
