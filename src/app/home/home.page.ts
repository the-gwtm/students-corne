import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController : ToastController) {}

  async presentToast()
  {
    const toast = await this.toastController.create({
      message: "Registered Successfully.",
      duration : 2000,
      color : "success",
      position : "top"
    });
    toast.present();
  }

}
