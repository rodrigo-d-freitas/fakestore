import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductsService } from '../services/products.services';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations : [
        ProductComponent
    ],
    imports : [
        CommonModule,
        RouterOutlet,
        HttpClientModule
    ],
    providers : [
        ProductsService
    ],
    exports : [
        ProductComponent
    ]

})
export class ProductModule {}