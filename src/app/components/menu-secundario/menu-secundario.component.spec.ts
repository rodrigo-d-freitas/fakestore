import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSecundarioComponent } from './menu-secundario.component';

describe('MenuSecundarioComponent', () => {
  let component: MenuSecundarioComponent;
  let fixture: ComponentFixture<MenuSecundarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSecundarioComponent]
    });
    fixture = TestBed.createComponent(MenuSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
