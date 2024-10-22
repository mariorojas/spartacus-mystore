import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdapter } from '@spartacus/core';
import { BestbuyProductAdapter } from './bestbuy-product-adapter';
import { BESTBUY_PRODUCT_NORMALIZER } from './bestbuy-product-converter';
import { BestbuyProductNormalizer } from './bestbuy-product-normalizer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: ProductAdapter,
      useExisting: BestbuyProductAdapter,
    },
    {
      provide: BESTBUY_PRODUCT_NORMALIZER,
      useExisting: BestbuyProductNormalizer,
      multi: true,
    },
  ]
})
export class CustomDatabindingModule { }
