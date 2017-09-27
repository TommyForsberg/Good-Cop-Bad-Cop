import { Injectable } from '@angular/core';

@Injectable()
export class CoptocopService {
   currentGoodCopClass: string = 'goodCop';

  constructor() { }
  LeaveRoom()
  {
    this.currentGoodCopClass = 'goodCop-left';
  }
}
