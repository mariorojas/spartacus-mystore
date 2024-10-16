import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPageComponent } from './static-page/static-page.component';
import { OccConfig, PRODUCT_NORMALIZER, provideConfig, RoutingConfig, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { staticRoutes } from './static-page/custom-static-routes';
import { ProductPrettyNameNormalizer } from './custom-routes/product-name.normalizer';



@NgModule({
  declarations: [
    StaticPageComponent
  ],
  imports: [
    CommonModule,

    // Dependent module for semantic URLs like cxUrl
    UrlModule,

    // Custom Composable Storefront static routes
    RouterModule.forChild(staticRoutes),
  ],
  providers: [
    // Configure product routes
    provideConfig(<RoutingConfig>{
      routing: {
        routes: {
          product: {
            paths: [
              'product/:manufacturer/:productCode/:prettyName',
              'product/:productCode/:name',
            ],
          },
        },
      },
    }),

    // Configure OCC product endpoint to get the manufacturer attribute in the response
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          endpoints: {
            productSearch: 'products/search?fields=products(code,manufacturer,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch&query=${query}',
          },
        },
      },
    }),

    // Configure pretty name normalizer
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: ProductPrettyNameNormalizer,
      multi: true,
    }
  ],
  exports: [RouterModule]
})
export class CustomRoutingModule { }
