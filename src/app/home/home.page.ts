import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {  UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  regForm : UntypedFormGroup | any;

  constructor(public toastController : ToastController) {

    this.regForm = new UntypedFormControl({
      'fullname' : new UntypedFormControl(null, Validators.required),
      'email' : new UntypedFormControl(null, Validators.required),
      'mobNumber' : new UntypedFormControl(null, Validators.required),
      'gender' : new UntypedFormControl(null, Validators.required),
      'class' : new UntypedFormControl(null, Validators.required),
      
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
