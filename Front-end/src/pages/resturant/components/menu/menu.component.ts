import { Component, Input } from '@angular/core';
import { Meal } from '../../../../entities/meals/model/meals.model';
import { MealsCardComponent } from '../../../../shared/components/cards/meals-card/meals-card.component';

@Component({
  selector: 'app-menu',
  imports: [MealsCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() meals! : Meal[]
}
