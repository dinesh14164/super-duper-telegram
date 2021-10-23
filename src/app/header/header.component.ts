import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showProfile: boolean;
  constructor(private route: Router,
              private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.authEmmiter.subscribe(check => {
      console.log('emitter');
      this.showHeader(check);
    });
  }

  showHeader(num: number): void {
    if (num === 2) {
      this.showProfile = true;
    } else {
      this.showProfile = false;
    }
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.showHeader(3);
    this.route.navigate(['/auth/login']);
  }
}
