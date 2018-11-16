import { NgModule, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy, App } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DelonModule } from './delon.module';
import { DefaultInterceptor } from './core/net/default.interceptor';
import { AuthGuard } from './shared/guard';
import { BASE_URL } from './core/config/service.config';
import { StartupService } from './core/startup/startup.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { I18NService } from './core/i18n/i18n.service';
import { default as ngLang } from '@angular/common/locales/zh-Hans';
import { NZ_I18N, zh_CN as zorroLang } from 'ng-zorro-antd';
import { ALAIN_I18N_TOKEN, DELON_LOCALE, zh_CN as delonLang } from '@delon/theme';
import { registerLocaleData } from '@angular/common';

const LANG = {
  abbr: 'zh-Hans',
  ng: ngLang,
  zorro: zorroLang,
  delon: delonLang,
};
registerLocaleData(LANG.ng, LANG.abbr);
const LANG_PROVIDES = [
  { provide: LOCALE_ID, useValue: LANG.abbr },
  { provide: NZ_I18N, useValue: LANG.zorro },
  { provide: DELON_LOCALE, useValue: LANG.delon },
];

// 加载i18n语言文件
export function I18nHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/tmp/i18n/`, '.json');
}

const I18NSERVICE_MODULES = [
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: I18nHttpLoaderFactory,
      deps: [HttpClient],
    },
  }),
];

const I18NSERVICE_PROVIDES = [
  { provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false },
];
const INTERCEPTOR_PROVIDES = [
  // { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];

export function StartupServiceFactory(
  startupService: StartupService,
): Function {
  return () => startupService.load();
}
const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true,
  },
];

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DelonModule.forRoot(),
    IonicModule.forRoot(),
    ...I18NSERVICE_MODULES,
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    ...LANG_PROVIDES,
    ...INTERCEPTOR_PROVIDES, // 拦截器
    ...I18NSERVICE_PROVIDES,
    ...APPINIT_PROVIDES,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppMinimize,
    App,
    AuthGuard,
    { provide: BASE_URL, useValue: 'https://192.168.10.252:8443/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
