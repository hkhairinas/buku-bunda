import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/book/', icon: 'home' },
    { title: 'Settings', url: '/book/setting/', icon: 'settings'},
    { title: 'About', url: '/book/about/', icon: 'information-circle'},
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
