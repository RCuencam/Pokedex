import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, Observable, tap } from 'rxjs';
import { Pokemon, PokemonDetail } from './models/Pokemon';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'defontana-pokedex';
  page: number = 1;

  searchInput: string = "";
  pokemons: Pokemon[] = [];
  currentPokemon?: PokemonDetail;
  resultFilter: Pokemon[] = [];
  isLoadingPokemon : boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemonList().subscribe(resp => {
      this.pokemons = resp;
    })
  }

  selectPokemon(pokemon_url: string): void {
    this.isLoadingPokemon = true;
    this.pokemonService.getPokemonDetails(pokemon_url)
    .subscribe(resp => {
      this.currentPokemon = resp;
      this.isLoadingPokemon = false;
    })
  }

  searchPokemon(): void {
    this.resultFilter = this.searchInput.length > 0 
    ? this.pokemons.filter((item: any) => item.name.includes(this.searchInput)) : [] 
  }
}
