import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AppComponent } from "./app.component"
import { AppModule } from "./app.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";


describe('AppComponent',() => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(waitForAsync( () => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent
        ],
        imports: [
          AppModule
        ]
      }).compileComponents();
      
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })

    it('Deve criar o component App', () => {
      expect(component).toBeDefined();
    });
});

