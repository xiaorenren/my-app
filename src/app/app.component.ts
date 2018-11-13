import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Platform, App, NavController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationEnd } from '@angular/router';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  sideMenuDisabled = true;
  backButtonPressed = false; // 用于判断返回键是否触发
  customBackActionSubscription: Subscription;
  url: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private appMinimize: AppMinimize, // 可以最小化Android设备上的应用程序
    // private app: App,
    public navController: NavController, // 导航控制器
    public toastCtrl: ToastController,
  ) {
    this.initRouterListen();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault(); // 管理本机状态栏的外观,styleDefault使用默认状态栏（深色文本，浅色背景）。
      this.splashScreen.hide(); // 显示和隐藏启动画面。
      this.registerBackButtonAction(); // 注册返回按键事件
      this.platform.resume.subscribe(); // 弹出框
    });
  }

  registerBackButtonAction() {
    this.customBackActionSubscription = this.platform.backButton.subscribe(() => {
      this.platform.pause.subscribe();
      if (this.url === '/tabs/home' || this.url === '/tabs/mytv' || this.url === '/tabs/about') {
        this.appMinimize.minimize();
        // if (this.backButtonPressed) {
        //   this.appMinimize.minimize();
        //   this.backButtonPressed = false;
        // } else {
        //   //  第一次按，弹出Toast
        //   (await this.toastCtrl.create({
        //     message: '再按一次退出应用',
        //     duration: 2000,
        //     position: 'bottom'
        //   })).present();

        //   this.backButtonPressed = true;
        //   setTimeout(() => this.backButtonPressed = false, 2000);
        // }
      } else {
        // this.navController.goBack();
      }
    }, 101);
  }
  initRouterListen() {
    this.router.events.subscribe(event => { // 需要放到最后一个执行
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }
}
