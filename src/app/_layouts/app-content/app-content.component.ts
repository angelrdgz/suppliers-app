import { Component, OnInit } from '@angular/core';

import * as feather from 'feather-icons';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	feather.replace();
  }

}
