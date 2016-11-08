import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { TableComponent }   from './table.component';
import { TeamComponent }   from './team.component';
import { StandingsService } from './standings.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
	BrowserModule, 
  	HttpModule, 
  	JsonpModule,
  	AppRoutingModule
  ],  
  declarations: [ AppComponent, TableComponent, TeamComponent],
  providers: [StandingsService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }