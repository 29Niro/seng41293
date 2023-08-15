import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'seng41293-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailCtrl = new FormControl('niro@gmail.com',[Validators.required,Validators.email]);

  loginFormGroup = new FormGroup({
    email: this.emailCtrl,
    password: new FormControl('123456', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private router: Router) {}

  onLogin() {
    
    // console.log(this.loginFormGroup.valid);
    this.router.navigate(['/admin']);
  }
}
