import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ContentModule } from './content/content.module';
import { HighlightDirective } from './directives/highlight.directive';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AvatarPipe } from './pipes/avatar.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HighlightDirective,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule,
    HttpClientModule,
    AvatarPipe
  ],
  providers: [
    UserService

  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
