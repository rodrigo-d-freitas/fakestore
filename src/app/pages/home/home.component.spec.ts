import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ProductModule } from 'src/app/product/product.module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { MenuPrimarioComponent } from 'src/app/components/menu-primario/menu-primario.component';
import { MenuSecundarioComponent } from 'src/app/components/menu-secundario/menu-secundario.component';

describe('HomeComponent', () => {

  let component: HomeComponent;

  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProductModule],
      declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        MenuPrimarioComponent,
        MenuSecundarioComponent
      ]
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
