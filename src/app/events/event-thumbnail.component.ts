import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail"> 
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{event.price}}</div>
      <div>
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>

      <button class="btn btn-primary" (click)="handleMeClick()">Click Me.</button>
    </div>
  `,
  styles: [`
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    .thumbnail {min-height: 210px;}
  `]
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClicked = new EventEmitter();
  someVariable: any = "This is fun!";

  handleMeClick() {
    this.eventClicked.emit('I love programming');
  }
  logFoo(){
    console.log('Okay');
  }

} 