export class Standings {
	rank: number;
	team: string;
	teamId: number;
	playedGames: number;
	crestURI: string;
	points: number;
	goals: number;
	goalsAgainst: number;
	goalDifference: number;
}

export class LeagueTable {
	leagueCaption: string;
	matchday: number;
	standing: Standings[];
}