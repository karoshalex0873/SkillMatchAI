// login.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { IconsModule } from '../helpers/icons.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,IconsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    rememberMe: new FormControl(true)
  });

  strengthBars = [
    { active: false }, // Minimum length
    { active: false }, // Lowercase letter
    { active: false }, // Uppercase letter
    { active: false }  // Number/Special char
  ];
  strengthLabel = 'Weak';
  strengthLabelClass = 'text-red-500';

  onPasswordChange(event: Event) {
    const password = (event.target as HTMLInputElement).value;
    this.updatePasswordStrength(password);
  }

  private updatePasswordStrength(password: string) {
    const strength = {
      hasMinLength: password.length >= 8,
      hasLowercase: /[a-z]/.test(password),
      hasUppercase: /[A-Z]/.test(password),
      hasNumberOrSpecial: /[\d!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    // Update strength bars
    this.strengthBars = [
      { active: strength.hasMinLength },
      { active: strength.hasLowercase },
      { active: strength.hasUppercase },
      { active: strength.hasNumberOrSpecial }
    ];

    // Determine strength level
    const activeCount = this.strengthBars.filter(b => b.active).length;
    if (activeCount <= 1) {
      this.strengthLabel = 'Weak';
      this.strengthLabelClass = 'text-red-500';
    } else if (activeCount <= 3) {
      this.strengthLabel = 'Moderate';
      this.strengthLabelClass = 'text-yellow-500';
    } else {
      this.strengthLabel = 'Strong';
      this.strengthLabelClass = 'text-green-500';
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  continueWithGoogle() {
    console.log('Continue with Google');
  }
}