import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetalleComponent } from './movie-detalle.component';

describe('MovieDetalleComponent', () => {
  let component: MovieDetalleComponent;
  let fixture: ComponentFixture<MovieDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
