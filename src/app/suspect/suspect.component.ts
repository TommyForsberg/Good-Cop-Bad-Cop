import { Component, OnInit } from '@angular/core';
import {TemperService} from '../services/temper/temper.service';
@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.css']
})

export class SuspectComponent implements OnInit {
  toughness: number;
  temperService: TemperService;
  constructor(private _temperService: TemperService) {
    this.temperService = _temperService;

  }

  ngOnInit() {

  }
}
