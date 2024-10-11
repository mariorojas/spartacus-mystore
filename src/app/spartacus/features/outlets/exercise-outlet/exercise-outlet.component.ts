import { Component } from '@angular/core';
import { OutletPosition } from '@spartacus/storefront';
import { CurrentProductService } from '@spartacus/storefront';
import { isNotNullable, Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-exercise-outlet',
  templateUrl: './exercise-outlet.component.html',
  styleUrl: './exercise-outlet.component.scss'
})
export class ExerciseOutletComponent {
  before: OutletPosition = OutletPosition.BEFORE;
  
  constructor(private currentProductService: CurrentProductService) {}

  private product$: Observable<Product> = this.currentProductService.getProduct().pipe(filter(isNotNullable));

  isSelectedBrand$: Observable<boolean> = this.hasBrand('canon');
  
  hasBrand(brand: string) : Observable<boolean> {
    return this.product$.pipe(
      map(
        p =>
          !!p.categories?.find(c => c.name?.toLowerCase() === brand.toLowerCase())
      )
    );
  }
}
