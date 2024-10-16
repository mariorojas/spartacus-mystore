import { Routes } from "@angular/router";
import { StaticPageComponent } from "./static-page.component";
import { CmsPageGuard, PageLayoutComponent } from "@spartacus/storefront";

export const staticRoutes: Routes = [
  {
    path: 'sale',
    component: StaticPageComponent,
    canActivate: [CmsPageGuard],
  },
  {
    path: 'demo/static/page',
    component: PageLayoutComponent,
    data: { pageLabel: '/faq' },
    canActivate: [CmsPageGuard],
  }
];