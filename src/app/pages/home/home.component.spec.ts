import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ProductModule } from 'src/app/product/product.module';

describe('HomeComponent', () => {

  let component: HomeComponent;

  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProductModule],
      declarations: [HomeComponent]
    })
      .compileComponents()
      .then(() => {

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
      })
  }));
  

  it('Deve criar o componente HomeComponent', () => {
    expect(component).toBeTruthy();
  })
});
