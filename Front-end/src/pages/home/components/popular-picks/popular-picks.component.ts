import { Component } from '@angular/core';
import { PopularPicksItemComponent } from "../popular-picks-item/popular-picks-item.component";

@Component({
  selector: 'app-popular-picks',
  imports: [PopularPicksItemComponent],
  templateUrl: './popular-picks.component.html',
  styleUrl: './popular-picks.component.css'
})
export class PopularPicksComponent {

}
