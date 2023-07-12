import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductsService } from '../services/products.services';

@NgModule({
    declarations : [
        ProductComponent
    ],
    imports : [],
    providers : [
        ProductsService
    ]

})
export class ProductModule {}