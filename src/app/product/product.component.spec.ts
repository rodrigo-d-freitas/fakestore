import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
      })
  }));

  it('Deve criar o componente Product', () => {
    expect(component).toBeTruthy();
  });
});
