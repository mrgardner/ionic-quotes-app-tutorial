import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {Favorites} from "../pages/favorites/favorites";
import {Library} from "../pages/library/library";
import {Settings} from "../pages/settings/settings";
import {QuotePage} from "../pages/quote/quote";
import {Quotes} from "../pages/quotes/quotes";
import {TabsPage} from "../pages/tabs/tabs";
import {QuotesService} from "../services/quotes";
import {SettingService} from "../services/settings";

@NgModule({
  declarations: [
    MyApp,
    Favorites,
    Library,
    Settings,
    QuotePage,
    Quotes,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Favorites,
    Library,
    Settings,
    QuotePage,
    Quotes,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingService
  ]
})
export class AppModule {}
