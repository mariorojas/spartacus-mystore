import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBannerComponent } from './custom-banner/custom-banner.component';
import { MediaModule } from '@spartacus/storefront';
import { CmsConfig, provideConfig } from '@spartacus/core';



@NgModule({
  declarations: [
    CustomBannerComponent
  ],
  imports: [
    CommonModule,
    MediaModule
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent,
        },
      },
    }),
  ],
  exports: [CustomBannerComponent]
})
export class ExerciseCmscomponentsModule { }
