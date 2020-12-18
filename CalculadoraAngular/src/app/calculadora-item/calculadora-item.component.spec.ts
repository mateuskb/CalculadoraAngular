import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraItemComponent } from './calculadora-item.component';

describe('CalculadoraItemComponent', () => {
  let component: CalculadoraItemComponent;
  let fixture: ComponentFixture<CalculadoraItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
