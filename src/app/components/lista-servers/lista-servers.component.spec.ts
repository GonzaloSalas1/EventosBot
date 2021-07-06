import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServersComponent } from './lista-servers.component';

describe('ListaServersComponent', () => {
  let component: ListaServersComponent;
  let fixture: ComponentFixture<ListaServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaServersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
