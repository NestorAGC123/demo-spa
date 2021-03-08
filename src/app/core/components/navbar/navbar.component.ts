import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@demo-spa-core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

}
