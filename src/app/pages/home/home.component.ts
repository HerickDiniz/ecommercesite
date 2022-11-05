import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';

OrderDetailsService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  constructor(private service: OrderDetailsService) { }
  foodData:any;
  mouseEncima: boolean = false;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

  alterarVisibilidade(){
    this.mouseEncima= !this.mouseEncima;
  }

}
