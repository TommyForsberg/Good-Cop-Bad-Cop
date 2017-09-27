import { Injectable } from '@angular/core';
import {TemperService} from '../temper/temper.service';
@Injectable()
export class CoptocopService {
   currentGoodCopClass: string = 'goodCop';
   currentBadCopClass: string = 'badCop';
   neutralargument: string = 'Start the interrogation!';
   private temperService: TemperService;
   constructor(private _temperService: TemperService) {
     this.temperService = _temperService;
  }
  private goodCopIsInRoom: boolean = true;
  private badCopIsInRoom: boolean = true;
  LeaveRoom() {
    if (this.goodCopIsInRoom === true) {
      this.CopToCopConversation('Leave us alone?');
      this.currentGoodCopClass = 'goodCop-left';
      this.temperService.AffectStateOfMind(20);
      this.goodCopIsInRoom = false;
    }
  }
  BadCopLeaveRoom() {
    if (this.badCopIsInRoom === true) {
      this.CopToCopConversation('Leave us alone?');
      this.currentBadCopClass = 'badCop-leave';
      this.temperService.AffectTemper(-20);
      this.temperService.AffectStateOfMind(-30);
      this.badCopIsInRoom = false;
    }
  }
  CopToCopConversation(argument: string) {
    this.neutralargument = argument;
    this.temperService.goodcopargument = '';
    this.temperService.badcopargument = '';
  }
}
