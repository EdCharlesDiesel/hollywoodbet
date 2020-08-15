import { ITournament } from './shared/ITournament';
import { IEvent } from './../events/shared/IEvents';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tournament-details',
  template: `
    <div class="well hoverwell thumbnail"> 
      <h2>{{tournament.tournamentName}}</h2>
      <p></p>
      </div>     
  `,
  styles: [`
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    .thumbnail {min-height: 210px;}
  `]
})
export class TournamentDetailsComponent {

  @Input() tournament: any; 

}



