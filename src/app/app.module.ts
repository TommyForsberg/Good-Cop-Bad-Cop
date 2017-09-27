import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GoodcopComponent } from './goodcop/goodcop.component';
import { BadcopComponent } from './badcop/badcop.component';
import { SuspectComponent } from './suspect/suspect.component';
import {TemperService} from './services/temper/temper.service';
import {CoptocopService} from './services/coptocop/coptocop.service';

@NgModule({
  declarations: [
    AppComponent,
    GoodcopComponent,
    BadcopComponent,
    SuspectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TemperService, CoptocopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
