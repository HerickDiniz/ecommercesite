import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id: 1,
      foodName:" Mundo Game Of Thrones",
      foodDetails:"livro",
      //foodPrice: 200,
      foodImg: "assets/img/logo-got.png ",
    },
    {
      id: 2,
      foodName:"Universo Harry Potter",
      foodDetails:"livro 2",
      //foodPrice: 200,
      foodImg: "assets/img/logo-hp.png ",
    },
    {
      id: 3,
      foodName:"O Senhor dos Anéis",
      foodDetails:"livro 3",
      //foodPrice: 200,
      foodImg: "assets/img/logo-osda.png ",
    },
    {
      id: 3,
      foodName:"Jogos Vorazes",
      foodDetails:"livro 4",
      //foodPrice: 200,
      foodImg: "assets/img/logo-jv.png ",
    }
  ]
}

