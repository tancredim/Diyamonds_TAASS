import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAnnunciComponent } from './listaAnnunci.component';

describe('UserListComponent', () => {
  let component: ListaAnnunciComponent;
  let fixture: ComponentFixture<ListaAnnunciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAnnunciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAnnunciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
