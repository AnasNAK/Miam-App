import { Component } from '@angular/core';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ContentFooterComponent } from './content-footer/content-footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-layout',
  imports: [ContentHeaderComponent , ContentFooterComponent , RouterModule],
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.css'
})
export class ContentLayoutComponent {

}
