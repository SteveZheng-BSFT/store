import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-blah',
  templateUrl: './blah.component.html',
  styleUrls: ['./blah.component.scss'],
  providers: [NgbTabsetConfig]
})
export class BlahComponent implements OnInit {

  constructor(config: NgbTabsetConfig) {
    config.justify = 'justified';
  }

  ngOnInit() {
  }

}
