import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSearchBoxComponentService } from './custom-search-box-component.service';
import { SearchBoxComponentService } from '@spartacus/storefront';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: SearchBoxComponentService,
    useClass: CustomSearchBoxComponentService,
  }],
})
export class ExerciseServicesModule { }
