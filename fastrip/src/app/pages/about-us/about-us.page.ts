import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroserviceService } from 'src/app/services/registroservice.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  constructor(private router: Router,
    private serviceRegistro: RegistroserviceService) { }

  ngOnInit() {
  }

  logOut(){
    this.serviceRegistro.logOut()
    this.router.navigate(['/home']);
  }
}