import { Component, Input, OnInit } from '@angular/core';
import { DisplayStyle } from '../../../../shared/enums/display-style.enum';

@Component({
  selector: 'my-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() displayStyle: DisplayStyle;
  DisplayStyle = DisplayStyle;
  items = [
    {name: '可乐', price: 2.99, img: 'assets/icons/soda.svg'},
    {name: '剃须刀', price: 20.99, img: ''},
    {name: '大米', price: 2.99, img: null}];

  constructor() { }

  ngOnInit() {
  }

}
