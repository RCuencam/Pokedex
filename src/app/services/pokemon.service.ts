import { Injectable, } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pokemon, PokemonDetail } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get(`${this.url}?limit=1279`).pipe(
      map((data: any) => data.results)
    )
  }

  getPokemonDetails(pokemon_url: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(pokemon_url);
  }
}
