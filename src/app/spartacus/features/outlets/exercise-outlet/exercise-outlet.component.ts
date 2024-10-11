import { Component } from '@angular/core';
import { OutletPosition } from '@spartacus/storefront';

@Component({
  selector: 'app-exercise-outlet',
  templateUrl: './exercise-outlet.component.html',
  styleUrl: './exercise-outlet.component.scss'
})
export class ExerciseOutletComponent {
  before: OutletPosition = OutletPosition.BEFORE;
}
