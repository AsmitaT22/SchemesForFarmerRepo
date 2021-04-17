import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmerhomeComponent } from './farmerhome/farmerhome.component';
import { RegisterhomeComponent } from './registerhome/registerhome.component';
import { BiddingfarmerhomeComponent } from './biddingfarmerhome/biddingfarmerhome.component';
import { FarmercornerComponent } from './farmercorner/farmercorner.component';
import { Farmercorner1Component } from './farmercorner1/farmercorner1.component';
import { FarmerloginComponent } from './farmerlogin/farmerlogin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FarmerhomeComponent,
    RegisterhomeComponent,
    BiddingfarmerhomeComponent,
    FarmercornerComponent,
    Farmercorner1Component,
    FarmerloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
