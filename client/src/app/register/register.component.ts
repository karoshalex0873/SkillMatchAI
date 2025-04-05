import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../helpers/icons.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule,IconsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  registerForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    termsAndConditions: new FormControl(false, [Validators.requiredTrue])
  },{validators:this.passwordMatchValidator})

  strengthBars = [
    { active: false }, // Minimum length
    { active: false }, // Lowercase letter
    { active: false }, // Uppercase letter
    { active: false }  // Number/Special char
  ];
  strengthLabel = 'Weak';
  strengthLabelClass = 'text-red-500';
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

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

    this.strengthBars = [
      { active: strength.hasMinLength },
      { active: strength.hasLowercase },
      { active: strength.hasUppercase },
      { active: strength.hasNumberOrSpecial }
    ];

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

  togglePasswordVisibility(field: 'password' | 'confirmPassword') {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}


