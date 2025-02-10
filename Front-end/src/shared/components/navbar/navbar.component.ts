import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AuthFacade } from '../../../app/core/auth/store/auth.facades';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule , CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private readonly authFacade : AuthFacade = inject(AuthFacade)

  readonly _vm = combineLatest({
    isAuthenticated : this.authFacade._isAuthenticated,
  })

  logout() : void {
    this.authFacade.logout()
  }
}
