import { provideHttpClient, withFetch, withInterceptorsFromDi } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { OutletsModule } from "./spartacus/features/outlets/outlets.module";
import { GlobalConfigModule } from "./spartacus/features/global-config/global-config.module";
import { provideConfig } from "@spartacus/core";
import { Theme, ThemeConfig } from "./spartacus/features/global-config/config/theme-config";
import { CustomLayoutModule } from "./spartacus/features/custom-layout/custom-layout.module";
import { ExerciseTranslationsModule } from "./spartacus/features/exercise-translations/exercise-translations.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    EffectsModule.forRoot([]),
    SpartacusModule,
    OutletsModule,
    GlobalConfigModule,
    //CustomLayoutModule
    ExerciseTranslationsModule,
  ],
  providers: [provideConfig(<ThemeConfig> {
      theme: Theme.ICECREAM
    }),
    provideHttpClient(withFetch(),withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
