import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';

import { Geolocation } from '@ionic-native/geolocation/ngx';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AmplifyUIAngularModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
