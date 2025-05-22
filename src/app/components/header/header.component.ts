import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { Prodotto } from '../../models/Prodotto';
import { Animale } from '../../models/Animale';

@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nome = "Simone"; // <= type inference
  anno: number = 78;

  animale: Animale  = {nome: "Fiocco", razza: "gatto"}
  
  prodotto?: Prodotto; //? permette di assumere due valori Prodotto o Undefined
  
  bici?: Prodotto = {
    nome: "Bicicletta",
    prezzo: 120,
    desc: "Test",
    foto: ""
  };
  
  esempio() {
    this.prodotto = {
      desc: "Test",
      foto: "",
      nome: "Bicicletta",
      prezzo: 120,
    };
    let eta = 16;
    let patentato = false;
    if (eta >= 18) {
      patentato = true;
    } else {
      patentato = false;
    }
    patentato = eta >= 18 ? true : false; // operatore ternario
  }
};

