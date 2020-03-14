import {Component, Input} from '@angular/core';
import {Song} from '../../models/Song';
import {Album} from '../../models/Album';

@Component({
  selector: 'app-box-item',
  templateUrl: './box-item.component.html',
  styleUrls: ['./box-item.component.scss']
})
export class BoxItemComponent {

  @Input() item: Song | Album;

}
