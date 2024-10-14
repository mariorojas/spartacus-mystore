import { Component } from '@angular/core';
import { MiniCartComponent } from '@spartacus/cart/base/components/mini-cart';

@Component({
  selector: 'app-custom-mini-cart',
  templateUrl: './custom-mini-cart.component.html',
  styleUrl: './custom-mini-cart.component.scss'
})
export class CustomMiniCartComponent extends MiniCartComponent {

}
