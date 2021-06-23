import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home/', icon: 'home' },
    { title: 'Buku', url: '/book/', icon: 'book'},
    { title: 'Settings', url: '/setting/', icon: 'settings'},
    { title: 'About', url: '/about/', icon: 'information-circle'},
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
