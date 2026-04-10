import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaInicioComponent } from './prueba-inicio.component';

describe('PruebaInicioComponent', () => {
  let component: PruebaInicioComponent;
  let fixture: ComponentFixture<PruebaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
