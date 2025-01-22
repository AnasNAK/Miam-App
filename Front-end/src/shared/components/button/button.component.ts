import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div>
      <button
        [class]="[
          'rounded-lg bg-blue-600 focus:outline-none transition duration-300 ease-in-out',
          sizes[size],
          variants[variant],
          classes
        ]"
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
  @Input() classes: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary'; 

  @Output() click: EventEmitter<void> = new EventEmitter<void>(); 

  sizes = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  variants = {
    primary: 'bg-blue-500 hover:bg-blue-700',
    secondary: 'bg-gray-500 hover:bg-gray-700',
    danger: 'bg-red-500 hover:bg-red-700',
  };

  // Handle button click
  handleClick() {
    this.click.emit();
  }
}
