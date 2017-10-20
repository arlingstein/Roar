import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../login/auth/auth.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.css']
})
export class HeadernavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  logout() {
    this.authService.logout()
    .then(success => this.router.navigateByUrl('/login'))
    .catch(err => console.log(err));
  }

}
