import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ConnectionService } from './connection/connection.service';
import { VideoFileComponent } from './services/video.file/video.file.component';
import { TextFileComponent } from './services/text.file/text.file.component';
import { AudioFileComponent } from './services/audio.file/audio.file.component';
import { VideoUrlComponent } from './services/video.url/video.url.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    NotfoundComponent,
    RegisterComponent,
    VideoFileComponent,
    TextFileComponent,
    AudioFileComponent,
    VideoUrlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
