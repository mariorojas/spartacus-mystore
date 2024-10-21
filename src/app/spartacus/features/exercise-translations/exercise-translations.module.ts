import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayI18nMessagesComponent } from './display-i18n-messages/display-i18n-messages.component';
import { GlobalMessageService, GlobalMessageType, I18nConfig, I18nModule, provideConfig, TranslationService } from '@spartacus/core';
import { IconModule, OutletRefModule } from '@spartacus/storefront';
import { CartBaseModule } from '@spartacus/cart/base';
import { filter } from 'rxjs';


const messageType = GlobalMessageType.MSG_TYPE_INFO;

export function i18MessageFactory(
  translationService: TranslationService,
  messageService: GlobalMessageService
) {
  return (): Promise<any> => {
    translationService.translate('customFeature.example', { param1: 5 , param2: 17})
      .pipe(filter(i => !i.startsWith('[')))
      // continue with the regular subscribe to the String observabler
      .subscribe(i => messageService.add(`Custom label added: ${i}`, messageType));
    return Promise.resolve();
  }
}

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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: i18MessageFactory,
      deps: [ TranslationService, GlobalMessageService ],
      multi: true,
    },
    provideConfig(<I18nConfig>{
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          custom: ['customFeature'],
        },
      },
    }),
  ],
  exports: [DisplayI18nMessagesComponent],
})
export class ExerciseTranslationsModule { }
