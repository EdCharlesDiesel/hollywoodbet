import { NavBarComponent } from './nav/nav-bar.component';
import { EventDetailsComponent } from './events/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { TournamentComponent } from './tournament/tournament-details.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    NavBarComponent,
    TournamentComponent,

  ],
  
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
