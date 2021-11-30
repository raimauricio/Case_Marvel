import { Perfil } from './../interfaces/perfil.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MarvelService {
  perfis: Perfil[] = []

  constructor() { }
}
