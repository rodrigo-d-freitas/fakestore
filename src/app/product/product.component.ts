import { Component, Input } from '@angular/core';
import { ProductsService } from '../services/products.services';
import { Products } from '../models/Products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  products!: Products;
}
