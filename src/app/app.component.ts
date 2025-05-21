import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProdottoCardComponent } from "./components/prodotto-card/prodotto-card.component";
import { ListaProdottiComponent } from "./components/lista-prodotti/lista-prodotti.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ProdottoCardComponent, ListaProdottiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-basics';
}
