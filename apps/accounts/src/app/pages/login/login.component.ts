import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'seng41293-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailCtrl: FormControl;
  loginFormGroup: FormGroup;

  private angularFireAuth: AngularFireAuth = inject(AngularFireAuth);  
  
  constructor(private router: Router) {
    this.emailCtrl = new FormControl('niro@gmail.com', [
      Validators.required,
      Validators.email,
    ]);

    this.loginFormGroup = new FormGroup({
      email: this.emailCtrl,
      password: new FormControl('123456', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

  }

  async onLogin() {
    await this.angularFireAuth.signInWithEmailAndPassword(this.emailCtrl.value, this.loginFormGroup.get('password')?.value).then(()=>{
      this.router.navigate(['/admin']);
    });
  }
}
