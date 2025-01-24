import { Component, Input } from '@angular/core';
import { PopularPicksItemComponent } from "../popular-picks-item/popular-picks-item.component";
import { Observable } from 'rxjs';
import { Meal } from '../../../order-page/Models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-picks',
  imports: [PopularPicksItemComponent , CommonModule],
  templateUrl: './popular-picks.component.html',
  styleUrl: './popular-picks.component.css'
})
export class PopularPicksComponent {
  @Input() meals !: Meal[] | null;
  @Input() isLoading !: boolean | null;
  @Input() error !: string | null;
}
