import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {  FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../Services/loader.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  regForm : UntypedFormGroup | any;

  constructor(public toastController : ToastController, private ionLoader : LoaderService) { }
  ngOnInit(): void {

    this.ionLoader.autoLoader();
    
    this.regForm = new UntypedFormGroup({
      'fullname' : new UntypedFormControl(null, Validators.required),
      'email' : new UntypedFormControl(null, Validators.required),
      'mobNumber' : new UntypedFormControl(null, Validators.required),
      'gender' : new UntypedFormControl(null, Validators.required),
      'standard' : new UntypedFormControl(null, Validators.required),
      
    });

  }

  async presentToast(regForm : any)
  {
    const toast = await this.toastController.create({
      message: "Registered Successfully.",
      duration : 2000,
      color : "success",
      position : "top"
    });
    toast.present();

    console.log(regForm);
  }

}