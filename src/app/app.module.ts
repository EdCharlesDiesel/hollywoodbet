import { CreateEventComponent } from './events/create-event.component';
import { TournamentListComponent } from './tournament/tournament-list.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventDetailsComponent } from './events/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './routes';

import { EventsAppComponent } from './events-app.component';
import { TournamentDetailsComponent } from './tournament/tournament-details.component';
import { CreateTournamentComponent } from './tournament/create-tournament/create-tournament.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    NavBarComponent,
    TournamentDetailsComponent,
    CreateTournamentComponent,
    TournamentListComponent,
    CreateEventComponent

  ],
  
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
