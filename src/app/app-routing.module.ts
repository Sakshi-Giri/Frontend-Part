import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { VideoUrlComponent } from './services/video.url/video.url.component';
import { VideoFileComponent } from './services/video.file/video.file.component';
import { TextFileComponent } from './services/text.file/text.file.component';
import { AudioFileComponent } from './services/audio.file/audio.file.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'login',
    component: LoginComponent 
  },
  { 
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'work',
    component: ServicesComponent,
  },
  { path: 'video-input',
   component: VideoUrlComponent },
  { path: 'video-file',
   component: VideoFileComponent },
   {
    path: 'text-file',
    component: TextFileComponent
   },
   {
    path:'audio-file',
    component: AudioFileComponent
   },
  {
    path: 'notfound',
    component: NotfoundComponent,
  },
  {
    path: '**',
    redirectTo: 'notfound'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
