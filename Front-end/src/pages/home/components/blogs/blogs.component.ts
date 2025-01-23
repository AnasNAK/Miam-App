import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { BlogCardComponent } from "../../../../shared/components/cards/blog-card/blog-card.component";

@Component({
  selector: 'app-blogs',
  imports: [ButtonComponent, BlogCardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  displayText() : void{
    console.log("Button clicked.")
  }
}
