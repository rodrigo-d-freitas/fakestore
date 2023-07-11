import { ProductsService } from "./products.services";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";


describe('Products Service', () => {

    let productsService : ProductsService;
    let httpTestingController : HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports : [HttpClientTestingModule],
            providers : [ProductsService]
        });

        productsService = TestBed.inject(ProductsService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('Todos os produtos', () => {
        productsService.allProducts()
        .subscribe(products => {
            expect(products).toBeTruthy;
        });

        const req = httpTestingController.expectOne('https://fakestoreapi.com/products');

        expect(req.request.method).toEqual("GET");

        
    });

    it('Todas as categorias', () => {
        productsService.allCategories()
        .subscribe(categories => {
            expect(categories).toBeTruthy;
        });

        const req = httpTestingController.expectOne('https://fakestoreapi.com/products/categories');

        expect(req.request.method). toEqual("GET");
    })

    afterEach(() => {
        httpTestingController.verify();
    })
})
