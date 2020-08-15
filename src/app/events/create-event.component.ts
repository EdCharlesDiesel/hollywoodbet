import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'event-new',
  template: `
    <div class="well hoverwell thumbnail"> 
      <h2>{{event.eventName}}</h2>
      <div>Event Number: {{event.eventNumber}}</div>
      <div>Event Date: {{event.eventDate | date}}</div>
      <div>Event End Date: {{event.eventDate | date}}</div>
      <div>Auto Close: {{event.autoClose}}</div>
      </div>
  `,
  styles: [`
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    .thumbnail {min-height: 210px;}
  `]
})
export class CreateEventComponent {
  @Input() event: any;
  @Output() eventClicked = new EventEmitter();
  someVariable: any = "This is fun!";

  handleMeClick() {
    this.eventClicked.emit('I love programming');
  }
  logFoo() {
    console.log('Okay');
  }

} 