import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayI18nMessagesComponent } from './display-i18n-messages/display-i18n-messages.component';
import { I18nModule } from '@spartacus/core';
import { IconModule, OutletRefModule } from '@spartacus/storefront';
import { CartBaseModule } from '@spartacus/cart/base';



@NgModule({
  declarations: [
    DisplayI18nMessagesComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    IconModule,
    OutletRefModule,
    CartBaseModule,
  ],
  exports: [DisplayI18nMessagesComponent],
})
export class ExerciseTranslationsModule { }
