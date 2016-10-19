import { LeagueTable } from './table';
import { Standings } from './table';

export const TABLE: LeagueTable = {
  	leagueCaption: 'Premier League 2015/16',
    matchday: 10,
    standing:
    [
        {
            rank: 1,
            team: 'ManCity',
            teamId: 65,
            playedGames: 10,
            crestURI: 'http:\/\/upload.wikimedia.org/wikipedia/de/f/fd/ManCity.svg',
            points: 22,
            goals: 24,
            goalsAgainst: 8,
            goalDifference: 16
        },
        {
            rank: 4,
            team: 'ManU',
            teamId: 66,
            playedGames: 10,
            crestURI: 'http:\/\/upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg',
            points: 20,
            goals: 15,
            goalsAgainst: 8,
            goalDifference: 7
        }]};