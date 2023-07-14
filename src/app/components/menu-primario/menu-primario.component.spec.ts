import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrimarioComponent } from './menu-primario.component';

describe('MenuPrimarioComponent', () => {
  let component: MenuPrimarioComponent;
  let fixture: ComponentFixture<MenuPrimarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPrimarioComponent]
    });
    fixture = TestBed.createComponent(MenuPrimarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
