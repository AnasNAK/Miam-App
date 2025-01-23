import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [],
  template: `
    <div class="py-5">
      <ul class="border-b flex items-center gap-5 ">
        @for (category of categories; track category.key) {
          <li>
            <button class="tab {{currentTab === category.key ? 'active' : ''}}" (click)="emitEvent(category.key)" [attr.data-cat]="category.key">
            {{category.label}}
            </button>
          </li>
        }
      </ul>
    </div>
  `,
  styleUrl : './tabs.component.css'
})
export class TabsComponent {
  @Input() categories! : {key : string , label : string}[]
  @Input() currentTab! : string
  
  @Output() tabChange : EventEmitter<string> = new EventEmitter<string>()
   
  emitEvent(selectedTab : string) {
    this.tabChange.emit(selectedTab)    
  }
  
}
