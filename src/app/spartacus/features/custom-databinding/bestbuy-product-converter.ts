import { InjectionToken } from '@angular/core';
import { Converter, Product } from '@spartacus/core';

export const BESTBUY_PRODUCT_NORMALIZER = new InjectionToken<Converter<any, Product>>('Bestbuy_Product_Normalizer');