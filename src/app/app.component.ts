import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProdottoCardComponent } from "./components/prodotto-card/prodotto-card.component";
import { ListaProdottiComponent } from "./components/lista-prodotti/lista-prodotti.component";
import { TitleComponent } from "./components/title/title.component";
import { Prodotto } from './models/Prodotto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaProdottiComponent, TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-basics';

  prodotti_novita: Prodotto[] = [
    {
      nome: "Bici",
      desc: "Nera",
      prezzo: 100,
      foto: "https://picsum.photos/300/200"
    },
    {
      nome: "Friggitrice",
      desc: "Ad aria",
      prezzo: 15,
      foto: "https://picsum.photos/300/200"
    }
  ]

    prodotti_suggerimenti: Prodotto[] = [
    {
      nome: "Scooter",
      desc: "Nera",
      prezzo: 110,
      foto: "https://picsum.photos/300/200"
    },
    {
      nome: "Chitarra",
      desc: "Ad aria",
      prezzo: 80,
      foto: "https://picsum.photos/300/200"
    },
      {
      nome: "Aspirapolvere",
      desc: "Ad aria",
      prezzo: 80,
      foto: "https://picsum.photos/300/200"
    }
  ]
}
