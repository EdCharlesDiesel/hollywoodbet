import { ITournament } from './shared/ITournament';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tournament-list',
  template: `
  <div>
    <h1> All Tournaments</h1>
    <hr/>
    <div class="row">
    <div *ngFor="let tournament of tournaments" class="col-md-5">
      <tournament-details [tournament]="tournament"></tournament-details>
    </div>
  </div>
  
  `
})
export class TournamentListComponent {


  tournaments: ITournament[] = [
    {
      id: 1198680,
      tournamentName: 'Jockey',
    },
    {
      id: 1198159,
      tournamentName: 'Vaal',
    }
  ]
}
