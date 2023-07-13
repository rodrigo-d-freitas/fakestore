import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      })
  }));

  it('Deve criar o componente Product', () => {
    expect(component).toBeTruthy();
  });

  it('Título do produto', () => {
      const h1 = el.query(By.css('h1'));
      expect(h1).toBeTruthy();
      
  })
});
