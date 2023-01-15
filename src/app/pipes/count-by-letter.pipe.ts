import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/Pokemon';

@Pipe({
  name: 'countByLetter'
})
export class CountByLetterPipe implements PipeTransform {

  transform(pokemons: Pokemon[], letter: string): unknown {
    return pokemons?.filter((pokemon: any) => pokemon?.name?.startsWith(letter)).length
  }

}
