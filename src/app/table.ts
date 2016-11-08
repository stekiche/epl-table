export class Standings {
	position: number;
	teamName: string;
	teamId: number;
	playedGames: number;
	wins: number;
	draws: number;
	losses: number;
	crestURI: string;
	points: number;
	goals: number;
	goalsAgainst: number;
	goalDifference: number;
	_links: {team: {href: string}};
}

export class LeagueTable {
	leagueCaption: string;
	matchday: number;
	standing: Standings[];
}

export class Team {
    name: string;
    shortName: string;
    squadMarketValue: string;
    crestUrl: string;
}