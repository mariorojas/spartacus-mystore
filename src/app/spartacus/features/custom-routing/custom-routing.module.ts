import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPageComponent } from './static-page/static-page.component';
import { UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { staticRoutes } from './static-page/custom-static-routes';



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
  ]
})
export class CustomRoutingModule { }
