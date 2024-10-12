import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideConfig } from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    provideConfig({
      layoutSlots: {
        /*LandingPage2Template: {
          slots: ['Section5', 'Section3', 'Section2A', 'Section2B', 'Section1']
        },*/
        LandingPage2Template: <unknown>null,
      },
    } as LayoutConfig)
  ]
})
export class CustomLayoutModule { }
