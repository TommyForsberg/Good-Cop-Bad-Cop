import { Component, OnInit } from '@angular/core';
import {CoptocopService } from '../services/coptocop/coptocop.service';
import { CopAction } from '../CopAction';
import {TemperService} from '../services/temper/temper.service';

@Component({
  selector: 'app-goodcop',
  templateUrl: './goodcop.component.html',
  styleUrls: ['./goodcop.component.css']
})

export class GoodcopComponent implements OnInit {
  coptocop: CoptocopService;
  temperservice: TemperService;
  title: string = 'Good Cop';
  get self() { return this; }

  methods: CopAction[] =
    [
      {Label: 'Offer cigarette', JsAction: 'OfferCigarette'},
      {Label: 'Pat shoulder', JsAction: 'PatShoulder'},
      {Label: 'Talk about sports', JsAction: 'TalkAboutSports'}];

  constructor(private _coptocop: CoptocopService, private _temperservice: TemperService) {
    this.coptocop = _coptocop;
    this.temperservice = _temperservice;
  }
  TellBadCopToLeave() {
    this.coptocop.BadCopLeaveRoom();

  }
  ngOnInit() {
  }
  OfferCigarette(): void {
    this.temperservice.AffectTemper(-5);
    this.temperservice.Conversate('Cigarette?');
    this.coptocop.neutralargument = '';
  }
  PatShoulder(): void {
    this.temperservice.AffectStateOfMind(-2);
  }
  TalkAboutSports(): void {
    this.temperservice.AffectStateOfMind(-1);
    this.temperservice.AffectTemper(1);
  }
}

