import { Component } from '@angular/core';
import { Estadisticas } from '../estadisticas/estadisticas';
import { QueEs } from '../que-es/que-es';
import { ContenidoPrincipal } from '../contenido-principal/contenido-principal';

@Component({
  imports: [Estadisticas, QueEs, ContenidoPrincipal],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
