import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  // array = ['home', 'about', 'mytv'];
  hidden = false;
  fullScreen = false;
  topFlag = false;
  tintColor = '#108ee9';
  unselectedTintColor = '#888';
  tabbarStyle: object = {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0
  };

  constructor(public router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService
  ) {
    this.tokenService.set({
      token: '123456789',
      userId: '1',
      name: 'admin',
      realName: 'jing',
      email: 'data.email',
      avatar: 'data.avatar',
      time: +new Date()
    });
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.array.map(res => {
    //       if (event.url.indexOf(res) > 0) {
    //         this.tab = res;
    //       }
    //     });
    //     console.log(this.tab);
    //   }
    // });
  }

  ngOnInit() {

  }

  onClick(value) {

  }

  onPress(event) {
    // console.log('event: ', event);
  }
}
