import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaProfiloComponent } from './visualizza-profilo.component';

describe('VisualizzaProfiloComponent', () => {
  let component: VisualizzaProfiloComponent;
  let fixture: ComponentFixture<VisualizzaProfiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaProfiloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaProfiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
