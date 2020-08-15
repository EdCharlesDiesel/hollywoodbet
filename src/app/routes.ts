import { TournamentListComponent } from './tournament/tournament-list.component';
import { EventsListComponent } from './events/events-list.component';
import { TournamentDetailsComponent } from './tournament/tournament-details.component';
import { Routes } from '@angular/router'
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details.component';
import { CreateTournamentComponent } from './tournament/create-tournament/create-tournament.component';


export const appRoutes: Routes =
  [
    { path: 'tournaments', component: TournamentListComponent },
    { path: 'tournaments/:id', component: TournamentDetailsComponent},
    { path: 'tournaments/new', component: CreateTournamentComponent },

    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    
    { path: '', redirectTo: '/events', pathMatch: 'full' }

  ]

 

