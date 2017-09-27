import { Component, OnInit } from '@angular/core';
import {TemperService} from '../services/temper/temper.service';
import {CoptocopService} from '../services/coptocop/coptocop.service';
@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.css']
})

export class SuspectComponent implements OnInit {
  temperService: TemperService;
  copToCopService: CoptocopService;
  constructor(private _temperService: TemperService, private _coptocopservice: CoptocopService) {
    this.temperService = _temperService;
    this.copToCopService = _coptocopservice;
  }

  ngOnInit() {

  }
}
