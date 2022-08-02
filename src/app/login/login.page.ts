import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../Services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private ionLoader : LoaderService) { }

  ngOnInit() {
    this.ionLoader.autoLoader();
  }

}
