import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConverterService, OccEndpointsService, Product, PRODUCT_NORMALIZER, ProductAdapter } from "@spartacus/core";
import { Observable } from "rxjs";
import { BESTBUY_PRODUCT_NORMALIZER } from "./bestbuy-product-converter";

@Injectable({
  providedIn: 'root',
})
export class BestbuyProductAdapter implements ProductAdapter {
  
  constructor(
    protected http: HttpClient,
    protected converter: ConverterService,
    protected occEndpoints: OccEndpointsService
  ) {}

  load(productCode: string, scope?: string): Observable<Product> {
    if ('553637' === productCode) {
      return this.http
                .get('assets/bestbuy-sku-6202761.json')
                .pipe(this.converter.pipeable(BESTBUY_PRODUCT_NORMALIZER));
    } else {
      return this.http
                .get(this.getEndpoint(productCode, scope))
                .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
    }
  }

  protected getEndpoint(code: string, scope?: string): string {
    return this.occEndpoints.buildUrl('product', {
      urlParams: { productCode: code },
      scope,
    });
  }
}
