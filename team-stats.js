const team = {
    _players: [{
        firstName: 'Tash',
        lastName: 'Ferenczy',
        age: 26
    },
    {
        firstName: 'Simon',
        lastName: 'Bidwell',
        age: 27
    },
    {
        firstName: 'Ed',
        lastName: 'Brett',
        age: 25
    }
    ],
    _games: [{
        opponent: 'LQC',
        teamPoints: 100,
        opponentPoints: 30
    },
    {
        opponent: 'Velociraptors QC',
        teamPoints: 70,
        opponentPoints: 50
    },
    {
        opponent: 'London Unspeakables',
        teamPoints: 150,
        opponentPoints: 80
    },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }
        this._games.push(game);
    }
};
team.addPlayer('Karina', 'Auer', 28);
team.addPlayer('Jemma', 'Thripp', 26);
team.addPlayer('Alex', 'Greenhalgh', 27);
console.log(team._players);
team.addGame('NTNUI', 190, 160);
team.addGame('METU', 210, 180);
team.addGame('Paris Titans', 80, 100);
console.log(team._games);