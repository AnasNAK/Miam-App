import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { ContentHeaderComponent } from "../../layouts/content-layout/content-header/content-header.component";

@Component({
  selector: 'app-auth',
  imports: [RouterModule, ContentHeaderComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
