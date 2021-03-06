import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import '../lib/rxjs/add/operator/toPromise';
import { LeagueTable } from './table';
//import { TABLE } from './mock-table';

@Injectable()
export class AppService {
	private tableUrl = 'http:\/\/api.football-data.org/v1/competitions/398/leagueTable';
	private token = '0496596353f84e089597586b407118b0';
	private headers = new Headers({'X-Auth-Token': this.token});

	constructor(private http: Http) {  }
	getTable(): Promise<LeagueTable{}> {
		return this.http.get(this.tableUrl, {headers: this.headers})
					.toPromise()
					.then(response => response.json() as LeagueTable{})
					.catch(this.handleError);
	}
	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
}
