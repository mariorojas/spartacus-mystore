import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayConfigComponent } from './display-config/display-config.component';
import { provideConfig } from '@spartacus/core';
import { defaultThemeConfig } from './config/default-theme-config';



@NgModule({
  declarations: [
    DisplayConfigComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DisplayConfigComponent
  ],
  providers: [
    provideConfig(defaultThemeConfig)
  ]
})
export class GlobalConfigModule { }
