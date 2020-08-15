import { TournamentListComponent } from './tournament/tournament-list.component';
import { EventsListComponent } from './events/events-list.component';
import { TournamentComponent } from './tournament/tournament-details.component';
import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details.component';


const appRoutes: Routes =
[
  {path:'tournaments', component: TournamentComponent},
  {path:'tournaments/:id', component: TournamentListComponent},

  

  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  
  // { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full'}
  
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
    
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
