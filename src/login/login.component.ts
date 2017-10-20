import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  loginError: boolean;
  errorMessage: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
      this.loginError = false;
      this.loginform = fb.group({
        'email': ['', Validators.required],
        'password': ['', Validators.required]
      });
   }

  ngOnInit() {
  }

 loginWithGoogle() {
   this.authService.loginWithGoogle()
   .then( res => this.router.navigateByUrl('/home'))
   .catch(err => console.log(err));
 }

  onSubmit() {
    const email = this.loginform.get('email').value;
    const password = this.loginform.get('password').value;
    console.log(email);
    console.log(password);
    this.authService.loginWithEmailAndPassword(email, password)
     .then(suc => this.router.navigateByUrl('/home'))
     .catch(err => this.errorMessage = err);
  }
}
