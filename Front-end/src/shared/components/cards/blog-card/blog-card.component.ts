import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  imports: [],
  template: `
    <div class="card_container">
      <div class="card_img overflow-hidden relative max-w-[370px]  max-h-[250px]  rounded-lg bg-gray-100">
      <img [src]="src" alt="Blog image" class="w-full object-cover"/>
      </div>
      <div class="card_body flex py-2 flex-col gap-2">
        <span class="text-gray-700/70 ">November 16, 2024</span>
        <h1>Our Recipe Blog</h1>
        <p class="text-pretty text-gray-700/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum
          veritatis tempora assumenda, doloribus nisi pariatur.
        </p>
      </div>
    </div>
  `,
})
export class BlogCardComponent {
  @Input() src! : string
}
