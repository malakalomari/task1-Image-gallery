import {Component, Input} from '@angular/core';
import { Info } from './model/info';

@Component ( {
  selector: 'image-details',
  template: `
    <div *ngIf="info">
      <div>
        <label>title: </label>{{info.title}}
      </div>
      <div>
        <label>description: </label>{{info.description}}        
      </div>
      <div>
        <label>date: </label>{{info.date}}
      </div>
    </div>
  `
})

export class ImageDetailsComponent {
  @Input() info: Info;
}
