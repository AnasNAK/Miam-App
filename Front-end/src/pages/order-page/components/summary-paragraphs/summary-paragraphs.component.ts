import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-paragraphs',
  imports: [],
  templateUrl: './summary-paragraphs.component.html',
  styleUrl: './summary-paragraphs.component.css'
})
export class SummaryParagraphsComponent {
  @Input() text!:string;
  @Input() data!:any;
}
