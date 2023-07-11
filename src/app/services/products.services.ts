import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProductsService {

    constructor(private http: HttpClient) {}

    protected UrlService: string = 'https://fakestoreapi.com/';

    allProducts() : Observable<any[]> {
        return this.http.get<any[]>(this.UrlService + 'products');
    }

    allCategories() : Observable<any[]> {
        return this.http.get<any[]>(this.UrlService + 'products/categories');
    }
}
