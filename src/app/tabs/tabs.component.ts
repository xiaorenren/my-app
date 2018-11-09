import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  hidden = false;
  fullScreen = true;
  tintColor = '#108ee9';
  unselectedTintColor = '#888';
  tabbarStyle: object = {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0
  };
  tab = 'home';

  constructor(public router: Router) {

  }

  ngOnInit() {

  }

  onClick(value) {
    this.tab = value;
    console.log(value);
  }

  showTabBar(event) {
    event.preventDefault();
    this.hidden = !this.hidden;
  }

  onPress(event) {
    console.log('event: ', event);
    // this.router.navigate([event]);
  }
}
