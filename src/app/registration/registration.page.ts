import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {  FormGroup, NgForm, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../Services/loader.service';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {


  regForm : UntypedFormGroup | any;

  constructor(public toastController : ToastController, private ionLoader : LoaderService, public userSer : UserService, public router : Router) { }
  ngOnInit(): void {

    this.ionLoader.autoLoader();
    
    this.regForm = new UntypedFormGroup({
      'fullname' : new UntypedFormControl(null, Validators.required),
      'username' : new UntypedFormControl(null, Validators.required),
      'password' : new UntypedFormControl(null, Validators.required),
      'email' : new UntypedFormControl(null, Validators.required),
      'mobNumber' : new UntypedFormControl(null, Validators.required),
      'gender' : new UntypedFormControl(null, Validators.required),
      'standard' : new UntypedFormControl(null, Validators.required),
      
    });

  }

  async presentToast(regForm : any)
  {
    this.ionLoader.autoLoader();
    
    setTimeout(async () => {
      const toast = await this.toastController.create({
        message: "Registered Successfully.",
        duration : 2000,
        color : "success",
        position : "top"
      });
      toast.present();
  
      console.log(regForm);
      
    }, 4000);

    
  }

  doRegister(form : NgForm)
  {
    this.userSer.userRegistration(form.value).subscribe((data:any)=>{
      console.log(data);
      form.reset();
      this.router.navigateByUrl("/login");
    }, (error:any)=>{
      console.log(error);
    });
  }

}