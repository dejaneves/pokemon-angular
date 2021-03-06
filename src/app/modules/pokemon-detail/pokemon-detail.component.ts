import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { IPokemonDetail, InitPokemonDetail } from 'src/app/modules/pokemon-detail/models/pokemon-detail';
import { NavigationService } from 'src/app/shared/navigation.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  public pokemonDetail: IPokemonDetail = InitPokemonDetail;
  public pokemons: [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pokemonService: PokemonService,
    private navigation: NavigationService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  back(): void {
    this.navigation.back()
  }

  /**
   * Get pokemon information
   */
  getPokemon(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const pokemonDetailSize = this.pokemonService.getPokemons().length;

    if(pokemonDetailSize > 0) {
      const pokemonDetail = this.pokemonService.getPokemons().map(item => {
        return item.detail;
      }).filter(detail => { return detail.id == id });

      if(pokemonDetail.length === 0) {
        this.getPokemonById(id);
      } else {
        this.pokemonDetail = pokemonDetail[0];
      }
    } else {
      this.getPokemonById(id);
    }
  }

  /**
   * Get pokemon by id
   * @param term
   */
  getPokemonById(term: string): void {
    this.pokemonService.findById(term).subscribe({
      next: (data:any) => {
        this.pokemonDetail = data;
      }
    });
  }
}
