import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthFacade } from '../../../app/core/auth/store/auth.facades';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly authFacade: AuthFacade = inject(AuthFacade);
  isToast = false;
  error: { hasError: boolean; message: string } = {
    hasError: false,
    message: '',
  };

  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  readonly _vm = combineLatest({
    isLoading : this.authFacade._isLoading,
    hasError : this.authFacade._hasError
  })

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      this.authFacade.login(email , password);
    }
  }
}
