import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tab = 'home';
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

  constructor(public router: Router
  ) {
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
    this.tab = value;
  }

  onPress(event) {
    // console.log('event: ', event);
    this.tab = event;
  }
}
