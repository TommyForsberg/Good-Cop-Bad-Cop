import { Injectable } from '@angular/core';

@Injectable()
export class TemperService {
  happiness: number = 50;
  angriness: number = 50;
  confidence: number = 50;
  nervous: number = 50;
  confession: number = 50;
  confessionStateClass: string = 'bg-info';
  goodcopargument: string = 'Start the interrogation!';
  badcopargument: string;
  constructor() { }

AffectStateOfMind(affection: number) {
    if (this.nervous < 100 && this.confidence < 100)
    {
      this.confidence -= affection;
      this.nervous += affection;
    }
}
AffectTemper(affection: number) {
  if (this.happiness < 100 && this.angriness < 100){
    this.happiness -= affection;
    this.angriness += affection;
    if (this.angriness > 50) {
      this.AffectStateOfMind(-3);
    }
  }
   this.DetermineConfess();
}
VerbalAbuse(argument: string) {
this.badcopargument = argument;
this.goodcopargument = '';
  this.DetermineConfess();
}
Conversate(argument: string) {
  this.goodcopargument = argument;
}

DetermineConfess()
{
  if(this.nervous === this.happiness) {
    this.confession += 5;
  }
  if(this.angriness > 65 && this.nervous > 65)
  {
    this.confession += 6;
  }

  if(this.confession > 75)
  {
    this.confessionStateClass = 'progress-bar-success';
  }
  if(this.confession < 40)
  {
    this.confessionStateClass = 'progress-bar-danger';
  }

}
}
