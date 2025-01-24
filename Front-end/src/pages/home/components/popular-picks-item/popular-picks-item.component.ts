import { Component, Input } from '@angular/core';
import { Meal } from '../../../order-page/Models';

@Component({
  selector: 'app-popular-picks-item',
  imports: [],
  templateUrl: './popular-picks-item.component.html',
  styleUrl: './popular-picks-item.component.css'
})
export class PopularPicksItemComponent {
   @Input() meal !: Meal;
}
