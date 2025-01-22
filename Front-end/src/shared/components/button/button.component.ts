import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div>
      <button
        [class]="class"
        [type]="type"
        (click)="handleClick()"
      >
      {{label}}
    </button>
    </div>
  `,
})
export class ButtonComponent {
  @Input() label: string = 'Default';
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; 
  @Input() class: string = '';

  @Output() callFunc: EventEmitter<void> = new EventEmitter<void>(); 


  handleClick() {
    this.callFunc.emit();
  }
}
