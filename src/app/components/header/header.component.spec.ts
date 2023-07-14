import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MenuPrimarioComponent } from '../menu-primario/menu-primario.component';
import { MenuSecundarioComponent } from '../menu-secundario/menu-secundario.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        MenuPrimarioComponent,
        MenuSecundarioComponent
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente Header', () => {
    expect(component).toBeTruthy();
  });
});
