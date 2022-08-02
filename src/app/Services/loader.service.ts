import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public loadingController : LoadingController) { }

  autoLoader()
  {
    this.loadingController.create({
      message: 'Loading',
      duration: 3000
    }).then((response) =>{
      response.present();
      response.onDidDismiss().then((response)=>{
        console.log('Loader Dismissed', response);
      });
    });
  }
}
