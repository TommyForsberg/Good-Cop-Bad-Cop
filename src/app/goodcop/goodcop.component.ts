import { Component, OnInit } from '@angular/core';
import {CoptocopService } from '../services/coptocop/coptocop.service';

@Component({
  selector: 'app-goodcop',
  templateUrl: './goodcop.component.html',
  styleUrls: ['./goodcop.component.css']
})

export class GoodcopComponent implements OnInit {
  coptocop: CoptocopService;
  title: string = 'Good Cop';

  methods: string[] = ['Offer cigarette', 'Pat shoulder', 'Talk about sports'];

  constructor(private _coptocop: CoptocopService) {
    this.coptocop = _coptocop;
  }
  TellBadCopToLeave() {
    this.coptocop.BadCopLeaveRoom();

  }
  ngOnInit() {
  }
}

