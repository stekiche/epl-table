import { Component, OnInit } from '@angular/core';
import { LeagueTable } from './table';
import { Standings } from './table';
import { StandingsService } from './standings.service';
import { Router } from '@angular/router';

@Component ({
	moduleId : __moduleName,
	selector: 'my-table',
	templateUrl: 'table.html',
	styleUrls: ['table.css']
})

export class TableComponent implements OnInit {
	title = 'Angular 2';
	table: LeagueTable {};
	selectedTeam: Standings;
	id: string;

	constructor(private standingsService: StandingsService, private router: Router) { }

	getTable(): void {
		this.standingsService.getTable().then(table => this.table = table);
	}

	ngOnInit(): void {
		this.getTable();
	}

	/*onSelect(team: Standings): void {
		this.selectedTeam = team;
		console.log(team);
		//console.log(this.table);
	}*/

	gotoDetail(team: Standings): void {
		this.id = team._links.team.href.substr(38);
		let link = ['/team', this.id];
		this.router.navigate(link);
	}
}