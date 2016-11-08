import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { StandingsService } from './standings.service';
import { Team } from './table';
import { Standings } from './table';

@Component({
  moduleId: __moduleName,
  selector: 'my-team',
  templateUrl: 'team.html',
  styles: [`
  	img {
  		height:300px;
  		width:auto;
  	}
  	body {
  		background-color: #2a2a2a;
  	}
  	div {
  		text-align:center;
  		position:absolute;
    	top:0; right:0;
    	bottom:0; left:0;
  		background-color: #2a2a2a;
  	}
  `]
})

export class TeamComponent implements OnInit {
	@Input()
	team: Team;

	constructor(
		private StandingsService: StandingsService,
  		private route: ActivatedRoute,
  		private location: Location
  	) {}

  ngOnInit(): void {
	  this.route.params.forEach((params: Params) => {
	    let id = params['id'];
	    this.StandingsService.getTeam(id)
	      .then(team => this.team = team);
	  });
	}

	goBack(): void {
	  this.location.back();
	}
}