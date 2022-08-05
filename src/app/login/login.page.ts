import { Component, OnInit } from '@angular/core';
import { NgForm, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '../Services/loader.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  msg : string;

  logForm : UntypedFormGroup | any;

  constructor(private ionLoader : LoaderService, public userSer : UserService, public router : Router) { }

  ngOnInit() {
    this.ionLoader.autoLoader();

    this.logForm = new UntypedFormGroup({
      'username' : new UntypedFormControl(null, Validators.required),
      'password' : new UntypedFormControl(null, Validators.required)
    });
  }

  doLogin(form : NgForm)
  {
    this.userSer.userLogin(form.value).subscribe((data:string)=>{
      if(data.length == 0)
      {
        this.msg = "Invalid Login";
      }
      else{
        localStorage.setItem("token", data);
        this.router.navigateByUrl("/home");
      }
    }, (error)=>{
      console.log(error);
      this.msg = "Something went Wrong";
      form.reset();
    })
  }

}
