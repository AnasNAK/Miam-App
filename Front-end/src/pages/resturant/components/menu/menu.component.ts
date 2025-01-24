import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Meal } from '../../../../entities/meals/model/meals.model';
import { MealsCardComponent } from '../../../../shared/components/cards/meals-card/meals-card.component';

@Component({
  selector: 'app-menu',
  imports: [MealsCardComponent , FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() meals! : Meal[]
  inputValue : string = ''
  @Output() searchVal : EventEmitter<string> = new EventEmitter<string>();
  @Output() selectedMeal : EventEmitter<Meal> = new EventEmitter<Meal>();
  onInputChange() {
    this.searchVal.emit(this.inputValue)
  }

  onSelectMeal(meal : Meal) : void {
    this.selectedMeal.emit(meal)
  }
}
