import { Component, Inject, isDevMode } from '@angular/core';
import { Config } from '@spartacus/core';

@Component({
  selector: 'app-display-config',
  templateUrl: './display-config.component.html',
  styleUrl: './display-config.component.scss'
})
export class DisplayConfigComponent {

  isDevelopmentMode: boolean = isDevMode();

  constructor(
    @Inject(Config) public globalConfig: Config
  ) {
    if (this.isDevelopmentMode) {
      console.debug(globalConfig);
    }
  }
}
