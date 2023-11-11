import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  constructor(private router: Router) { }

  login() {

    this.router.navigate(['/login'])
  }

  logout(){

    this.router.navigate(['/logout'])
  }

  ngOnInit() {
  }
}