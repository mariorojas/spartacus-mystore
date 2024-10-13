import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsStructureConfig, provideConfig } from '@spartacus/core';
import { staticCmsConfig } from './static-cms.config';
import { layoutConfig } from './layout.config';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    provideConfig(staticCmsConfig as CmsStructureConfig),
    provideConfig(layoutConfig),
  ]
})
export class ExerciseStaticCmsModule { }
