import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Components/About/about/about.component';
import { HomeComponent } from './Components/Home/home/home.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PostService } from './Services/PostService/post.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
