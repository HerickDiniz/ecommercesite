import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';


MatButtonModule
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
