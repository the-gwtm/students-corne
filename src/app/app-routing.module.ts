import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'basepage',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'basepage',
    loadChildren: () => import('./basepage/basepage.module').then( m => m.BasepagePageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'tamil',
    loadChildren: () => import('./Pages/tamil/tamil.module').then( m => m.TamilPageModule)
  },
  {
    path: 'english',
    loadChildren: () => import('./Pages/english/english.module').then( m => m.EnglishPageModule)
  },
  {
    path: 'maths',
    loadChildren: () => import('./Pages/maths/maths.module').then( m => m.MathsPageModule)
  },
  {
    path: 'science',
    loadChildren: () => import('./Pages/science/science.module').then( m => m.SciencePageModule)
  },
  {
    path: 'socialscience',
    loadChildren: () => import('./Pages/socialscience/socialscience.module').then( m => m.SocialsciencePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
