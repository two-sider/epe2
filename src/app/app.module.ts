import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetallePage} from '../pages/detalle/detalle';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LibrosService } from '../services/libros.services';

export const firebaseConfig = {
  apiKey: "AIzaSyCQ-3frlZw-mKOjJP7hFBFl-g8uRXPDCcM",
  authDomain: "epe2-22687.firebaseapp.com",
  databaseURL: "https://epe2-22687.firebaseio.com",
  storageBucket: "epe2-22687.appspot.com",
  messagingSenderId: '<1055899671281>'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LibrosService

  ]
})
export class AppModule {}
