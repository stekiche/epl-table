import { Component, OnInit } from '@angular/core';
import { LeagueTable } from './table';
import { AppService } from './app.service';

@Component ({
	selector: 'my-app',
	providers: [AppService],
	templateUrl: 'app/app.html',
	styleUrls: ['app/app.css']
})

export class AppComponent implements OnInit {
  title = 'Angular 2';
  table: LeagueTable {};

	constructor(private appService: AppService) { }

	getTable(): void {
		this.appService.getTable().then(table => this.table = table);
	}

	ngOnInit(): void {
		this.getTable();
	}
}