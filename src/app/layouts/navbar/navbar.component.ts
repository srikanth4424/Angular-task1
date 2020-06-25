import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private navbar: Object = {
    title: 'Github Userlist',
    icon: 'fab fa-github'
  }
  constructor() { }

  ngOnInit() {
  }

}
