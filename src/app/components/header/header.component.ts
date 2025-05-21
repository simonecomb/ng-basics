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
    id: 1,
    nome: "Bicicletta",
    prezzo: 120,
    inOfferta: false
  };
};

