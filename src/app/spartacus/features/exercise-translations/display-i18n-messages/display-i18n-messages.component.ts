import { Component } from '@angular/core';
import { ActiveCartService } from '@spartacus/cart/base/core';
import { Cart } from '@spartacus/cart/base/root';
import { TranslationService } from '@spartacus/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-display-i18n-messages',
  templateUrl: './display-i18n-messages.component.html',
  styleUrl: './display-i18n-messages.component.scss'
})
export class DisplayI18nMessagesComponent {

  cart$: Observable<Cart>;
  today: Number;
  private deliveryItemsQuantity: number | undefined = 0;
  componentMessage$: Observable<string> = of("");

  constructor(protected activeCartService: ActiveCartService, private translationService: TranslationService) {
    this.cart$ = this.activeCartService.getActive();
    this.today = Date.now();
    this.cart$.subscribe(cart => {
      this.deliveryItemsQuantity = cart.deliveryItemsQuantity;
      this.componentMessage$ = this.translationService.translate('miniCart.item', { count: this.deliveryItemsQuantity });
    });
  }
}
