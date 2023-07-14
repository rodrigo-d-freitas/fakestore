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
      const titulo = el.query(By.css('.card-title'));
      expect(titulo).toBeTruthy();  
  });

  xit('Mostrar a lista de produtos', () => {

    
    fixture.detectChanges();
    
    const cards = el.queryAll(By.css('.card'));
    expect(cards).toBeTruthy();
    expect(cards.length).toBe(20);
  })
});
