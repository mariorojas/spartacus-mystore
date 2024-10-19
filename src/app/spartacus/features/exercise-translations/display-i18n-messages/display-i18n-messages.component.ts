import { Component } from '@angular/core';
import { ActiveCartService } from '@spartacus/cart/base/core';
import { Cart } from '@spartacus/cart/base/root';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-i18n-messages',
  templateUrl: './display-i18n-messages.component.html',
  styleUrl: './display-i18n-messages.component.scss'
})
export class DisplayI18nMessagesComponent {

  cart$: Observable<Cart>;
  today: Number;

  constructor(protected activeCartService: ActiveCartService) {
    this.cart$ = this.activeCartService.getActive();
    this.today = Date.now();
  }
}
