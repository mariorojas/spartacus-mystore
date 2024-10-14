import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMiniCartComponent } from './custom-mini-cart.component';
import { RouterModule } from '@angular/router';
import { MiniCartModule } from '@spartacus/cart/base/components/mini-cart';
import { CmsConfig, I18nModule, provideConfig, UrlModule } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { CartDetailsModule } from '@spartacus/cart/base/components';



@NgModule({
  declarations: [
    CustomMiniCartComponent
  ],
  imports: [
    CommonModule, RouterModule, I18nModule, IconModule, UrlModule, MiniCartModule, CartDetailsModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        MiniCartComponent: {
          component: CustomMiniCartComponent,
        },
      },
    }),
  ],
  exports: [CustomMiniCartComponent]
})
export class CustomMiniCartModule { }
