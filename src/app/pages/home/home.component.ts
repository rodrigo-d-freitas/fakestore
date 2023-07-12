import { Component } from '@angular/core';
import { Products } from 'src/app/models/Products';
import { ProductsService } from 'src/app/services/products.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  public allProducts!: Products[];

  ngOnInit() {
    this.productsService.allProducts()
    .subscribe(
      products => {
        this.allProducts = products;
      },
      error => console.log(error)
    );
  }
}
