import { IEvent } from './shared/IEvents';
import { Component } from '@angular/core'

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1> All Events</h1>
    <hr/>
    <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
      <event-details [event]="event"></event-details>
    </div>
  </div>
  `
})
export class EventsListComponent {
  events: IEvent[] = [
    {
      id: 151536,
      tournamentId: 1198159,
      eventName: 'Race',
      eventNumber: 1,
      eventDate: new Date('2013-04-24'),
      eventEndDate: new Date('2013-04-24'),
      autoClose: true
    }
    ,
    {
      id: 151537,
      tournamentId: 1198159,
      eventName: 'Race',
      eventNumber: 1,
      eventDate: new Date('2013-04-24'),
      eventEndDate: new Date('2013-04-24'),
      autoClose: true
    },
    {
      id: 155552,
      tournamentId: 1198680,
      eventName: 'Race',
      eventNumber: 1,
      eventDate: new Date('2013-05-07'),
      eventEndDate: null,
      autoClose: true
    },
    {
      id: 155553,
      tournamentId: 1198680,
      eventName: 'Race',
      eventNumber: 2,
      eventDate: new Date('2013-05-07'),
      eventEndDate: null,
      autoClose: true
    },
    {
      id: 155554,
      tournamentId: 1198680,
      eventName: 'Race',
      eventNumber: 3,
      eventDate: new Date('2013-05-07'),
      eventEndDate: null,
      autoClose: true
    },
    {
      id: 155555,
      tournamentId: 1198680,
      eventName: 'Race',
      eventNumber: 4,
      eventDate: new Date('2013-05-07'),
      eventEndDate: null,
      autoClose: true
    },
    {
      id: 155556,
      tournamentId: 1198680,
      eventName: 'Race',
      eventNumber: 5,
      eventDate: new Date('2013-05-07'),
      eventEndDate: null,
      autoClose: true
    },   {
      id: 155557,
      tournamentId: 1198680,
      eventName: 'Race',
      eventNumber: 6,
      eventDate: new Date('2013-05-07'),
      eventEndDate: null,
      autoClose: true
    }
  ]
}


