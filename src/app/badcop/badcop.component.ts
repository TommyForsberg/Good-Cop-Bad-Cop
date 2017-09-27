import { Component, OnInit } from '@angular/core';
import {CopAction} from '../CopAction';
import {TemperService} from '../services/temper/temper.service';
import {CoptocopService} from '../services/coptocop/coptocop.service';


@Component({
  selector: 'app-badcop',
  templateUrl: './badcop.component.html',
  styleUrls: ['./badcop.component.css']
})

export class BadcopComponent implements OnInit {
  title: string = 'Bad Cop';
  argument: string = 'Start the interrogation!';
  private temperService: TemperService;
  coptocop: CoptocopService;

  methods: CopAction[] =
    [
      {Label: 'Yell!', JsAction: 'YellAction'},
      {Label: 'Hit', JsAction: 'HitAction'},
      {Label: 'Choke', JsAction: 'ChokeAction'}];

  invocations: string[] = ['Listen up', 'Talk to me', 'Hey', 'You'];
  profanities: string[] = ['asshole', 'mother fucker', 'dick head'];


  constructor(private _temperService: TemperService, _coptocop: CoptocopService) {
this.temperService = _temperService;
this.coptocop = _coptocop;

  }

  YellAction() {
  this.temperService.AffectTemper(1);
  this.temperService.VerbalAbuse(this.GetInvocation());
  this.coptocop.neutralargument = '';
  }

  HitAction(){
    this.temperService.AffectStateOfMind(2);
    if(this.temperService.nervous > 85)
    {
      this.temperService.confession = 20;
    }
  }

  ChokeAction() {if (this.temperService.nervous >= 90) {
      this.temperService.AffectTemper(5);
    } else {
      this.temperService.nervous = 90;
      this.temperService.confidence = 10;
    }
  }
AbruptGoodCopAction() {
    this.coptocop.LeaveRoom();

}
  ngOnInit() {

  }
  get self() { return this; }

  GetInvocation(): string
{
  return this.invocations[Math.floor(Math.random() * this.invocations.length)] + ' '
  + this.profanities[Math.floor(Math.random() * this.profanities.length)] + '!';
}
}
