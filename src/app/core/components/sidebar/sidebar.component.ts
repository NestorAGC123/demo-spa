import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarService } from '@demo-spa-core/services/sidebar/sidebar.service'; 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarToggled!: Observable<boolean>;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarToggled = this.sidebarService.getToggled();
  }

}
