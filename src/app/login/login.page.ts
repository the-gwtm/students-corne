import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../Services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logForm : UntypedFormGroup | any;

  constructor(private ionLoader : LoaderService) { }

  ngOnInit() {
    this.ionLoader.autoLoader();

    this.logForm = new UntypedFormGroup({
      'username' : new UntypedFormControl(null, Validators.required),
      'password' : new UntypedFormControl(null, Validators.required)
    });
  }

}
